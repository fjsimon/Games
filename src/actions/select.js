export class Select {
  select(isSelected) {
    return {
      type: SELECT,
      isSelected
    }
  }
}

export const SELECT = 'SELECT';
