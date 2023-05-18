# large-dataset
Handle a large amount of data with React.

Note: the large dataset was generated with https://www.onlinedatagenerator.com/manage/usertables/create/


## Crashing Chrome with bad code
When the code renders this much data (100.000 rows) with an array, it crashes:
![Crashing Chrome with bad code](crash.png)

I will try to fix this problem by using a dictionary instead of an array.

Pagination might be a solution, but that would be hiding the issue that using an array is the probably the source of this performance problem. I need to confirm it though.
