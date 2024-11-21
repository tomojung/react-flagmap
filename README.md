# FlagMap Component

A React component that dynamically displays country flags as SVG images with flexible rendering options.

## Features

-   Dynamically load country flags in SVG format
-   Customizable maximum width and height
-   Custom fallback UI for missing flag images
-   Supports custom class names for styling

## Installation

Install the component using npm or yarn:

```bash
npm install flagmap-component
# or
yarn add flagmap-component
```

## Usage

```tsx
import FlagMap from "flagmap-component";

const App = () => {
	return (
		<div>
			<FlagMap country="usa" maxWidth={400} maxHeight={400} className="custom-flag" />
		</div>
	);
};
```

## Props

| Prop        | Type     | Default  | Description                                     |
| ----------- | -------- | -------- | ----------------------------------------------- | -------------------------------- |
| `country`   | `string` | Required | Country code (e.g., "usa", "canada", "germany") |
| `maxWidth`  | `string  | number`  | `300`                                           | Maximum width of the flag image  |
| `maxHeight` | `string  | number`  | `300`                                           | Maximum height of the flag image |
| `className` | `string` | `""`     | Custom CSS class(es) for the container `div`    |

## Fallback

If a flag image is not available, the component displays: `Flag not available`

## Styling Example

```scss
.custom-class {
	border: 2px solid blue;
	border-radius: 8px;
	padding: 10px;
}

.flag-container {
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.flag-container img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
	display: block;
}
```

## Advanced Usage

```tsx
const Example = () => {
	return (
		<div>
			<FlagMap country="canada" maxWidth={400} maxHeight={400} className="custom-class" />
			<FlagMap country="germany" />
		</div>
	);
};
```

## License

MIT License
