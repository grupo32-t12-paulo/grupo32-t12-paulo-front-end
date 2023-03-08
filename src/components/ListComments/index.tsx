import {
  Avatar,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import Moment from "react-moment";
import "moment/locale/pt-br";
import Ellipse from "../../assets/ellipse.svg";
import { BaseSyntheticEvent, useContext, useState } from "react";
import { Textarea } from "@mui/joy";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AnnouncementDetailsContext } from "../../contexts/announcementDetails.context";

interface IChildren {
  userId: string | undefined;
}

interface IComment {
  id: string;
  text: string;
  createAt: string;
  user: IUser;
}

interface IUser {
  id: string;
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

export default function ListComments({ userId }: IChildren) {
  const { refreshListComments } = useContext(AnnouncementDetailsContext);
  const { comments } = useContext(AnnouncementDetailsContext);
  const [openEditComment, setOpenEditComment] = useState(false);
  const [comment, setComment] = useState<undefined | IComment>();
  const handleOpenEditComment = () => {
    setOpenEditComment(true);
  };
  const handleCloseEditComment = () => {
    setOpenEditComment(false);
  };

  async function listComment(id: string) {
    api
      .get(`comments/${id}`)
      .then((response) => {
        setComment(response.data);
        handleOpenEditComment();
      })
      .catch((error) => toast.error("Erro ao carregar comentário"));
  }

  async function updateComment(e: BaseSyntheticEvent) {
    e.preventDefault();
    api
      .patch(`comments/${comment?.id}`, { text: e.target[0].value })
      .then((response) => {
        handleCloseEditComment();
        refreshListComments();
        setComment(response.data);
      })
      .catch((error) => toast.error("Erro ao carregar comentário"));
  }

  async function deleteComment() {
    api
      .delete(`comments/${comment?.id}`)
      .then((response) => {
        handleCloseEditComment();
        refreshListComments();
      })
      .catch((error) => toast.error("Erro ao apagar comentário"));
  }

  comments?.map((comment) => {
    const arrName = comment.user.name.split(" ");
    let letters = "";
    if (arrName.length > 1) {
      const first = arrName[0].split("");
      const final = arrName[arrName.length - 1].split("");
      const letterFirst = first[0];
      const letterFinal = final[0];
      letters = `${letterFirst}${letterFinal}`;
    } else {
      const first = arrName[0].split("");
      const letterFirst = first[0];
      letters = `${letterFirst}`;
    }
    return (comment.user.letters = letters);
  });

  return (
    <>
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
            Comentários
          </Typography>
          {comments?.map((comment) => (
            <ListItem
              key={comment.id}
              alignItems="flex-start"
              sx={{ display: "flex", flexDirection: "column", mb: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
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
                {userId === comment.user.id && (
                  <IconButton
                    onClick={() => {
                      listComment(comment.id);
                    }}
                    edge="end"
                    aria-label="delete"
                  >
                    <ModeEditIcon />
                  </IconButton>
                )}
              </Box>
              <ListItemText
                sx={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "justify",
                  color: "var(--grey2)",
                  mb: 2,
                }}
                primary={comment.text}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Modal
        open={openEditComment}
        onClose={() => {
          return handleCloseEditComment();
        }}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2, width: 520, m: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Lexend", fontSize: 24 }}
            >
              Editar comentário
            </Typography>
            <IconButton
              onClick={() => {
                return handleCloseEditComment();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={(e) => updateComment(e)}>
            <Textarea
              minRows={6}
              placeholder="Digitar comentário"
              defaultValue={comment?.text}
            />
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => deleteComment()}
                sx={{ background: "var(--alert1)" }}
              >
                Apagar comentário
              </Button>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" sx={{ mr: 2 }} variant="contained">
                Salvar
              </Button>
              <Button
                variant="contained"
                onClick={() => handleCloseEditComment()}
              >
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
}
