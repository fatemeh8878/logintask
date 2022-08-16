export const Data = [
  {
    id: 1,
    title: "شعبه ایرانیان پوشش*",
    name: "branch",
    type: "select",
    register: {
      required: { value: true, message: "الزامی است" },
    },
  },
  {
    id: 2,
    title: "کارشناس*",
    name: "adjuster",
    type: "select1",
    register: {
      required: { value: true, message: "الزامی است" },
    },
  },
  {
    id: 3,
    title: "مبلغ خسارت ارزیابی شده*",
    name: "amount_damages_assessed",
    type: "text",
    register: {
      required: { value: true, message: "الزامی است" },

      pattern: {
        value: /^[1-9][0-9]*$/,
        message: "مقدار درست وارد کنید",
      },

      minLength: {
        value: 8,
        message: "مقدار  درست وارد کنید",
      },
      // maxLength: {
      //   value: 11,
      //   message: "مقدار رو درست وارد کنید",
      // },
    },
  },
  {
    id: 4,
    title: "تاریخ*",
    name: "visit_date",
    type: "date",
    register: {
      required: {
        value: true,
        message: "الزامی است",
      },
      pattern: {
        value: /^[0-9][0-9][0-9][0-9]+[-]+[0-3][0-9]+[-]+[0-3][0-9]*$/,
        message: "مقدار رو درست وارد کنید (21-09-1401)",
      },

      // maxLength: {
      //   value: 11,
      //   message: "مقدار رو درست وارد کنید",
      // },
    },
  },
  {
    id: 5,
    title: "ساعت*",
    name: "visit_time",
    type: "time",
    register: {
      required: {
        value: true,
        message: "الزامی است",
      },
      pattern: {
        value: /^[0-2][0-9]+[":"]+[0-6][0-9]*$/,
        message: "مقدار درست وارد کنید",
      },
    },
  },
  {
    id: 6,
    title: "مسافت رفت و برگشت طی شده*",
    name: "covered_distance",
    type: "number",
    register: {
      required: { value: true, message: "الزامی است" },

      pattern: {
        value: /^(0?[1-9]|[12][0-9]|3[00])$/,
        message: "مقدار درست وارد کنید",
      },
      // pattern: {
      //   value: /^*$/,
      //   message: "مقدار درست وارد کنید",
      // },
      minLength: {
        value: 1,
        message: "مقدار رو درست وارد کنید",
      },
      maxLength: {
        value: 2,
        message: "مقدار  درست وارد کنید",
      },
    },
  },
  { id: 7, title: "توضیحات", name: "description", type: "dec" },
];
