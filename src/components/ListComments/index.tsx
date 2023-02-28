import {
  Avatar,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Moment from "react-moment";
import "moment/locale/pt-br";
import Ellipse from "../../assets/ellipse.svg";

interface IChildren {
  comments: IComment[];
}

interface IComment {
  text: string;
  createAt: string;
  user: IUser;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: string;
  dateBirth: Date | string | number;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  idAdvertiser: boolean;
  image: string;
  letters: string;
}

export default function ListComments({ comments }: IChildren) {
  comments.map((comment) => {
    const arrName = comment.user.name.split(" ");
    let letters = "";
    if (arrName.length > 1) {
      const first = arrName[0].split("");
      const final = arrName[arrName.length - 1].split("");
      const letterFirst = first[0];
      const letterFinal = final[0];
      letters = `${letterFirst}${letterFinal}`;
    } else {
      console.log(letters.length);
      const first = arrName[0].split("");
      const letterFirst = first[0];
      letters = `${letterFirst}`;
    }
    return (comment.user.letters = letters);
  });

  return (
    <Box sx={{ mt: 5, mr: 1.1 }}>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            ml: 2,
            mb: 4,
            mt: 3,
            color: "var(--grey1)",
            fontFamily: "Lexend, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Lances
        </Typography>
        {comments.map((comment) => (
          <ListItem
            alignItems="flex-start"
            sx={{ display: "flex", flexDirection: "column", mb: 4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 2,
              }}
            >
              {comment.user.image ? (
                <Avatar
                  sx={{
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                  src={comment.user.image}
                />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: "var(--brand1)",
                    height: "32px",
                    width: "32px",
                  }}
                  sizes="small"
                >
                  <Typography fontSize={14} fontFamily="Inter, sans-serif">
                    {comment.user.letters}
                  </Typography>
                </Avatar>
              )}
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--grey1)",
                }}
              >
                {comment.user.name}
              </Typography>
              <Icon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Ellipse} alt="" />
              </Icon>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--grey3)",
                }}
              >
                <Moment interval={5} fromNow>
                  {comment.createAt}
                </Moment>
              </Typography>
            </Box>
            <ListItemText
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "24px",
                textAlign: "justify",
                color: "#495057",
                mb: 2,
              }}
              primary={comment.text}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
