export const combineProviders = (providers) =>
  // eslint-disable-next-line react/display-name
  providers.reduce((Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ));
