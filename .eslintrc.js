module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/multi-word-component-names": ["error", {
      "ignores": [
        'Access', 'Login', 'Landing', 'Error',
        "Accordion", "Avatar", "Badge", "Breadcrumb", "Button", "Calendar", "Card", "Carousel", "Chart", "Checkbox",
        "Chip" , "Chips", "Column", "Dialog", "Divider", "Dropdown", "Fieldset", "Galleria", "Image",
        "Inplace", "Knob", "Listbox", "Menu", "Menubar", "Message", "Paginator", "Panel", "Password",
        "Rating", "Slider", "Skeleton", "Sidebar", "Splitter", "Steps", "Tag", "Textarea", "Timeline", "Toast",
        "Toolbar", "Tree", "Free", "Dashboard", "Documentation", "Help", "Invoice", "Icons", "Typography", "Widgets"
      ]
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  
}
