import "@logseq/libs";

export const showMessage = (message: string) => {
  logseq.App.showMsg(`
        [:div.p-2
        [:h1 "${message}"]
        ]
    `);
};

export const showError = (message: string) => {
  logseq.App.showMsg(
    `
        [:div.p-2
        [:h1 "${message}"]
        ]
    `,
    "error"
  );
};
