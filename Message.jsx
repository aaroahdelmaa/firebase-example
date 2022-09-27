import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore, useUser } from "reactfire";

const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName, id, uid }) {
  const { data: user } = useUser();
  const firestore = useFirestore();

  return (
    <>
    <Chip sx={{marginBottom: 1,height:"100%"}} label={<Typography sx={{whiteSpace:"normal"}}>
      {createdAt?.seconds ? (
        <span>{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      {" "}
      <strong>        
        {displayName ? displayName : null}
      </strong>{" "}
      {text} </Typography>} variant="outlined"  />
      {uid === user.uid ? (
        <Button variant="contained"
          onClick={async () => {
            await deleteDoc(doc(firestore, "messages", id));
          }}
          >
            Poista
            </Button>
      ) : null}
       </>
  );    
}