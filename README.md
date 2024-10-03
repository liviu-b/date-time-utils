# Date and Time Utility Package

A lightweight utility package for working with dates and times.

## Installation

```bash
npm install date-time-utils
```

# Functions

Formats a given date into a string. The default format is YYYY-MM-DD.

```
const { formatDate } = require('date-time-utils');
console.log(formatDate('2024-10-01')); // "2024-10-01"
```

Adds a given number of days to a date.
```
const { addDays } = require('date-time-utils');
console.log(addDays('2024-10-01', 5)); // "2024-10-06"
```

Returns the difference in days between two dates.
```
const { differenceInDays } = require('date-time-utils');
console.log(differenceInDays('2024-10-01', '2024-10-10')); // 9
```

### Step 8: **Publish to NPM**

1. **Login to NPM (if you haven’t already):**

   ```bash
   npm login
2. Publish your package:
   ```
   npm publish