import { getDefaultAuthState } from "./features/auth/defaultAuthRootState";
import { RootState } from "./rootInterface";

export const defaultRootState: RootState = {
    authRoot: getDefaultAuthState()
}