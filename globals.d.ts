declare global {
  interface Window {
    Snipcart: {
      api: {
        modal: {
          show(): void;
        };
      };
      store: {
        getState(): {
          cart: {
            items: {
              count: number;
            };
          };
        };
        subscribe(callback: () => void): void;
      };
    };
  }
}

export {};
