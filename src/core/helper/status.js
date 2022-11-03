export const setStatus = (status) => {
  if (status == 1) {
    return '<span class="p-button p-component p-button-raised p-button-help p-button-text" style="padding:2px 10px">Tích cực</span>';
  } else if (status == 2) {
    return '<span class="p-button p-component p-button-raised p-button-danger p-button-text" style="padding:2px 10px">Không hoạt động</span>';
  } else if (status == 3) {
    return '<span class="p-button p-component p-button-raised p-button-secondary p-button-text" style="padding:2px 10px">Mặc định</span>';
  }
};

export const statusForUser = (status) => {
  if (status == 1) {
    return '<span class="p-button p-component p-button-raised p-button-help p-button-text" style="padding:2px 10px">Hoạt động</span>';
  } else if (status == 2) {
    return '<span class="p-button p-component p-button-raised p-button-danger p-button-text" style="padding:2px 10px">Không làm việc</span>';
  } else if (status == 3) {
    return '<span class="p-button p-component p-button-raised p-button-secondary p-button-text" style="padding:2px 10px">Mặc định</span>';
  }
};
