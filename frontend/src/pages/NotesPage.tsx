import styles from "../styles/NotesPage.module.css";
import NotesPageLoggedInView from "../components/NotesPageLoggedInView";
import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import { Container } from "react-bootstrap";
import { User } from "../model/user";

interface NotesPageProps {
  loggedInUser: User | null;
}

function NotesPage({ loggedInUser }: NotesPageProps) {
  return (
    <Container className={styles.notesPage}>
      {loggedInUser ? <NotesPageLoggedInView /> : <NotesPageLoggedOutView />}
    </Container>
  );
}

export default NotesPage;
