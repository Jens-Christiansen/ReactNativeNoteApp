import {variables} from "./_variables";

const common = {};

const primary = {
    color: variables.colors.primary,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 15,
};

const secondary = {
    color: variables.colors.secondary,
    marginBottom: 30,
};

export const text = {
    primary: Object.assign({}, common, primary),
    secondary: Object.assign({}, common, secondary),
};