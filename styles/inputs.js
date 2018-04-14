import {variables} from "./_variables";

const borderWidth = 1;
const borderColor = variables.colors.lightgray;
const width = "100%";

const common = {
    borderWidth: borderWidth,
    borderColor: borderColor,
    width: width,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
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
