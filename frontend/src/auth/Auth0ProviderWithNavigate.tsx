import { Props } from "@/interfaces";
import { Auth0Provider } from "@auth0/auth0-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate: FC<Props> = ({ children }: Props) => {
    const navigate = useNavigate();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialize auth!");
    }

    // const onRedirectCallback = (appState?: AppState, user?: User) => {};

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: redirectUri }}
            onRedirectCallback={() => {
                navigate("/auth-callback");
            }}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
