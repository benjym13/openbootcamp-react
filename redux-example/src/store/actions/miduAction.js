export const COUNTER_INC = '@counter/INCREMENTED';
export const NEW_NOTE = '@notes/NEW_NOTE';

export const couterIncremented = {
        type: COUNTER_INC,
        payload: 13
}

export const notesAction = (content) => {
    return {
        type: NEW_NOTE,
        payload: {
            content,
        }
    }
}