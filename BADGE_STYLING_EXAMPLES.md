# BadgeWithImage Styling Examples

The `BadgeWithImage` component now supports flexible styling with three different approaches:

## 1. Default Styling (No custom className)
```tsx
<BadgeWithImage text="Default Badge" />
```
Uses the default base classes: `inline-flex items-center px-4 py-2 bg-white border border-white rounded-full text-blue-700 text-sm font-medium mb-8 shadow-sm`

## 2. Extending Base Classes
```tsx
<BadgeWithImage 
  text="Extended Badge" 
  className="bg-blue-100 text-blue-800 border-blue-200" 
  extendBaseClass={true} 
/>
```
Combines base classes with your custom classes. Your classes will override conflicting properties.

## 3. Complete Override
```tsx
<BadgeWithImage 
  text="Custom Badge" 
  className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-bold" 
  extendBaseClass={false} 
/>
```
Completely replaces the default styling with your custom classes.

## 4. Custom Base Classes
```tsx
<BadgeWithImage 
  text="Custom Base Badge" 
  baseClassName="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-md text-xs"
  className="border-2 border-green-300"
  extendBaseClass={true}
/>
```
Define your own base classes and optionally extend them.

## Props Reference

- `className?: string` - Custom CSS classes
- `baseClassName?: string` - Override the default base classes
- `extendBaseClass?: boolean` - If true, combines base + custom classes; if false, uses only custom classes (default: false)
- `imageClassName?: string` - Custom classes for the image element