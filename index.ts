import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { DateRangePicker } from '@syncfusion/ej2-calendars';
/**
 * Default DateRangePicker sample
 */

    
    let daterangepicker: DateRangePicker = new DateRangePicker({
        placeholder: "Select a range",
    });
    daterangepicker.appendTo('#daterangepicker');
