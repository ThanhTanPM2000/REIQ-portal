import React from "react";

const QuestionIcon = ({ fill = "#00A1C9", stroke = "#00A1C9", args }) => {
  return (
    <svg
      width='12'
      height='19'
      viewBox='0 0 12 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.024 12.816C6.576 12.816 6.96 12.384 7.056 11.856L7.152 10.752C9.816 10.296 12 8.928 12 5.904V5.856C12 2.856 9.72 0.983999 6.36 0.983999C4.152 0.983999 2.544 1.776 1.272 2.976C0.936 3.264 0.792 3.648 0.792 4.008C0.792 4.728 1.392 5.328 2.136 5.328C2.472 5.328 2.784 5.184 3.024 4.992C3.984 4.128 5.016 3.672 6.288 3.672C8.016 3.672 9.048 4.608 9.048 5.952V6C9.048 7.512 7.8 8.376 5.544 8.592C4.896 8.664 4.512 9.144 4.608 9.792L4.848 11.856C4.92 12.408 5.328 12.816 5.88 12.816H6.024ZM4.176 16.224V16.464C4.176 17.4 4.896 18.12 5.88 18.12C6.864 18.12 7.584 17.4 7.584 16.464V16.224C7.584 15.288 6.864 14.568 5.88 14.568C4.896 14.568 4.176 15.288 4.176 16.224Z'
        fill={fill}
      />
    </svg>
  );
};

export default QuestionIcon;
