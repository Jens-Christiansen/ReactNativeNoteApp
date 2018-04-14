const borderWidth = 1;
const borderColor = "gray";
const width = "80%";

const common = {
    borderWidth: borderWidth,
    borderColor: borderColor,
    width: width,
};

const textInput = {
    height: 40,
};
const textArea = {
    height: 160,
};

export const inputs = {
    textInput: Object.assign({}, common, textInput),
    textArea: Object.assign({}, common, textArea),
};
