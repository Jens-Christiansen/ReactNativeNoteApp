import {variables} from "./_variables";

const common = {};

const noteOverview = {
    backgroundColor: variables.colors.lightgray,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
    maxHeight: 40,
};

export const notes = {
    noteOverview: Object.assign({}, common, noteOverview),
};