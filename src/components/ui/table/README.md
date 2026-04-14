# Reusable Table Component

A comprehensive, flexible table component system built for React applications with TypeScript support.

## Features

- **Flexible Column Configuration**: Define columns with custom renderers, alignment, and styling
- **TypeScript Support**: Full type safety with generic types
- **Responsive Design**: Built-in responsive breakpoints and mobile-friendly layouts
- **Customizable Styling**: Support for custom CSS classes and inline styles
- **Interactive Features**: Row selection, hover effects, click handlers
- **Loading & Empty States**: Built-in loading and empty state handling
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Basic Usage

```tsx
import { Table, TableColumn } from 'src/components/ui/table';

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
];

const columns: TableColumn<User>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    width: 80,
    align: 'center',
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    minWidth: 150,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    minWidth: 200,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: 100,
    align: 'center',
    render: (value: string) => (
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          value === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {value}
      </span>
    ),
  },
];

function MyComponent() {
  return (
    <Table
      columns={columns}
      data={users}
      rowKey="id"
      bordered
      striped
      hoverable
    />
  );
}
```

## Column Configuration

### Basic Column Properties

```tsx
interface TableColumn<T> {
  key: string; // Unique identifier
  title: string; // Header text
  dataIndex?: keyof T; // Data property to display
  width?: string | number; // Column width
  minWidth?: string | number; // Minimum width
  maxWidth?: string | number; // Maximum width
  align?: 'left' | 'center' | 'right'; // Text alignment
  sortable?: boolean; // Enable sorting
  filterable?: boolean; // Enable filtering
  className?: string; // Custom CSS classes
  headerClassName?: string; // Header CSS classes
  cellClassName?: string; // Cell CSS classes
}
```

### Custom Rendering

```tsx
{
  key: 'status',
  title: 'Status',
  dataIndex: 'status',
  render: (value: string, record: User, index: number) => (
    <Badge variant={value === 'active' ? 'success' : 'danger'}>
      {value}
    </Badge>
  ),
}
```

### Custom Header Rendering

```tsx
{
  key: 'actions',
  title: 'Actions',
  headerRender: (column) => (
    <div className="flex items-center gap-2">
      <span>{column.title}</span>
      <InfoIcon className="w-4 h-4" />
    </div>
  ),
  render: (_, record) => (
    <Button size="sm" onClick={() => handleEdit(record)}>
      Edit
    </Button>
  ),
}
```

## Table Configuration

### Basic Props

```tsx
interface TableConfig<T> {
  columns: TableColumn<T>[]; // Column definitions
  data: T[]; // Data array
  loading?: boolean; // Loading state
  emptyText?: string; // Empty state text
  rowKey?: keyof T | ((record: T) => string | number); // Row key
  onRow?: (record: T, index: number) => RowProps; // Row event handlers
  size?: 'small' | 'middle' | 'large'; // Table size
  bordered?: boolean; // Show borders
  striped?: boolean; // Alternating row colors
  hoverable?: boolean; // Hover effects
  className?: string; // Custom CSS classes
}
```

### Row Event Handlers

```tsx
<Table
  columns={columns}
  data={data}
  onRow={(record, index) => ({
    onClick: () => handleRowClick(record),
    onDoubleClick: () => handleRowDoubleClick(record),
    className: record.selected ? 'bg-blue-50' : '',
  })}
/>
```

### Scroll Configuration

```tsx
<Table
  columns={columns}
  data={data}
  scroll={{
    x: 800, // Horizontal scroll
    y: 400, // Vertical scroll
  }}
/>
```

## Examples

### 1. Simple Data Table

```tsx
import { SimpleTableExample } from 'src/components/ui/table/examples';
```

### 2. Leaderboard Table

```tsx
import { LeaderboardTableExample } from 'src/components/ui/table/examples';
```

### 3. Portfolio Table

```tsx
import { PortfolioTableExample } from 'src/components/ui/table/examples';
```

### 4. Farming Vaults Table

```tsx
import { FarmingTableExample } from 'src/components/ui/table/examples';
```

## Styling

The table component uses Tailwind CSS classes and follows the design system patterns:

- **Dark Theme**: Built-in support for dark mode
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Proper contrast ratios and focus states
- **Customizable**: Easy to override with custom CSS classes

## Advanced Features

### Responsive Columns

```tsx
{
  key: 'description',
  title: 'Description',
  dataIndex: 'description',
  responsive: {
    xs: { hide: true },
    sm: { hide: false, width: 200 },
    md: { width: 300 },
  },
}
```

### Custom Styling

```tsx
<Table
  columns={columns}
  data={data}
  className="bg-card rounded-lg border"
  headerClassName="bg-muted/50"
  bodyClassName="divide-y divide-border"
/>
```

## Best Practices

1. **Always provide a `rowKey`** for proper React reconciliation
2. **Use `minWidth`** for important columns to prevent layout issues
3. **Implement proper loading states** for better UX
4. **Use custom renderers** for complex data formatting
5. **Consider accessibility** when adding interactive elements
6. **Test responsive behavior** on different screen sizes

## Migration from Existing Tables

If you're migrating from existing table implementations:

1. Define your data types with TypeScript interfaces
2. Create column configurations using `TableColumn<T>[]`
3. Replace existing table markup with the `<Table>` component
4. Test all interactive features and styling
5. Update any custom CSS to work with the new component structure
