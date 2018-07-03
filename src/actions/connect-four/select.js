export class SelectPosition {
  selectPosition(position) {
    return {
      type: SELECT_POSITION,
      position
    }
  }
}

export const SELECT_POSITION = 'SELECT_POSITION';
