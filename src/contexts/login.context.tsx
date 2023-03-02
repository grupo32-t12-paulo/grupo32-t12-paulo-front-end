import api from "../services/api";
import decode from "jwt-decode";
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
interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}
export interface IUser {
  name: string;
  email: string;
  password?: string;
  cpf: string;
  cellPhone: string;
  dateBirth: Date | string | number;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  isAdvertiser: boolean;
  address: IAddress;
  id: number;
  addressId: number;
}
export interface IResponseLogin {
  user: IUser;
  token: string;
}
interface IToken {
  id: string;
  isActive: boolean;
  isAdvertiser: boolean;
}
export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  async function signIn(data: FieldValues) {
    try {
      const response = await api.post<IResponseLogin>("/login", data);
      if (response.status === 200) {
        const { token } = response.data;
        const resJWT: IToken = decode(token);
        localStorage.setItem("@motorshop:token", token);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await api.get(`/users/${resJWT.id}`);
        setUser(data);
        navigate("/announcement/1");
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
