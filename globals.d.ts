declare global {
  interface Window {
    SnipcartSettings: {
      publicApiKey: string;
      loadStrategy?: string;
      timeoutDuration?: number;
      version?: string;
      domain?: string;
      protocol?: string;
      loadCSS?: boolean;
      addProductBehavior?: string;
      modalStyle?: string;
      currency?: string;
      templatesUrl?: string;
    };
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
    LoadSnipcart: () => void;  // Aggiunta della proprietà LoadSnipcart
  }
}

export {};
