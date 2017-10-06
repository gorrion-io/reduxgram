import * as history from "connected-react-router";

import { createActionCreator } from "@src/redux/helpers";

export const redirectToProfilePage = createActionCreator((profileName: string) => history.push(`/${profileName}`));
