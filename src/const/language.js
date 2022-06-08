export const LANGUAGE = ["JS", "C", "C++", "Ruby", "PHP"];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGE);
        }, 1000);
    });
};
