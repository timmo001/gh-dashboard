import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, ListItem, Button } from "@mui/material";
import clsx from "clsx";

import SetRepository from "./SetRepository";
import useStyles from "assets/jss/components/headerLinks";

function HeaderLinks(): ReactElement {
  const [setRepository, setSetRepository] = useState<boolean>(false);

  const router = useRouter();
  const classes = useStyles();

  function handleSetRepository(): void {
    setSetRepository(true);
  }

  return (
    <>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            variant="outlined"
            className={classes.navLink}
            onClick={handleSetRepository}>
            <span className={classes.listItemText}>Set Repository</span>
          </Button>
        </ListItem>
        <ListItem className={clsx(classes.listItem, classes.divider)} />
        <ListItem className={classes.listItem}>
          <Link
            href={{
              pathname: "/",
              query: router.query,
            }}>
            <Button variant="text" className={classes.navLink}>
              <span className={classes.listItemText}>Dashboard</span>
            </Button>
          </Link>
        </ListItem>
      </List>
      {setRepository ? <SetRepository /> : ""}
    </>
  );
}

export default HeaderLinks;
