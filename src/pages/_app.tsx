import * as React from "react";
import App from "next/app";
import { Store } from "redux";
import NotFoundPage from "./404";
import { StoreProvider } from "./StoreProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class TodoApp extends App<{ pageProps: any; store: Store }> {
  componentDidMount(): void {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static redirectToComponent = (pageProps: any, Component: any) => {
    return pageProps?.notFound ? (
      <NotFoundPage />
    ) : (
      <Component {...pageProps} />
    );
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <StoreProvider>
          {TodoApp.redirectToComponent(pageProps, Component)}
        </StoreProvider>
      </>
    );
  }
}
export default TodoApp;
