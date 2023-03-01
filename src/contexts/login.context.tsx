import api from "../services/api";
import { toast } from "react-toastify";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

interface ILoginContext {
  user: null | IUser;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  signIn: SubmitHandler<FieldValues>;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
}

export interface IResponseLogin {
  user: IUser;
  token: string;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  async function signIn(data: FieldValues) {
    try {
      const response = await api.post<IResponseLogin>("/login", data);

      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem("@motorshop:token", token);

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setUser(user);
        navigate("/announcement/10");
      }
    } catch (err) {
      toast.error("Usuário ou senha incorreto.");
    }
  }

  return (
    <LoginContext.Provider value={{ user, setUser, signIn }}>
      {children}
    </LoginContext.Provider>
  );
}
