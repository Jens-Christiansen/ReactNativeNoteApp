import {variables} from "./_variables";

const common = {
    backgroundColor: variables.colors.white,
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
};

const view = {
    flex: 1,
    justifyContent: 'flex-start',
};

export const views = {
    view: Object.assign({}, common, view),
};
