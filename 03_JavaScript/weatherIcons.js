export const sun = `
  <svg width="400" height="200">
    <g id="sun">
      <circle cx="50" cy="50" r="40" fill="yellow" />
    </g>
  </svg>
`;

export const cloud = `
  <svg width="400" height="200">
    <g id="clouds">
      <circle cx="50" cy="50" r="20" fill="white" />
      <circle cx="70" cy="40" r="25" fill="white" />
      <circle cx="90" cy="50" r="20" fill="white" />
      <circle cx="110" cy="40" r="25" fill="white" />
      <circle cx="130" cy="50" r="20" fill="white" />
    </g>
  </svg>
`;

export const rain = `
   <svg width="400" height="200">
      <g id="rain">
        <line x1="80" y1="100" x2="70" y2="150" stroke="blue" stroke-width="2">
          <animate
            attributeName="y1"
            attributeType="XML"
            values="100; 200"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            attributeType="XML"
            values="150; 250"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="90" y1="100" x2="80" y2="150" stroke="blue" stroke-width="2">
          <animate
            attributeName="y1"
            attributeType="XML"
            values="100; 200"
            dur="1.1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            attributeType="XML"
            values="150; 250"
            dur="1.1s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="100" y1="100" x2="90" y2="150" stroke="blue" stroke-width="2">
          <animate
            attributeName="y1"
            attributeType="XML"
            values="100; 200"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            attributeType="XML"
            values="150; 250"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="110" y1="100" x2="100" y2="150" stroke="blue" stroke-width="2">
          <animate
            attributeName="y1"
            attributeType="XML"
            values="100; 200"
            dur="1.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            attributeType="XML"
            values="150; 250"
            dur="1.3s"
            repeatCount="indefinite"
          />
        </line>
      </g>
    </svg>
`;