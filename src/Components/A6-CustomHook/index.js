
// toggle > fetch > debouncing > localstorage > Auth

1. useFetch
// Purpose: To fetch data from an API and manage loading and error states.
// Example: const { data, loading, error } = useFetch(url);

2. useLocalStorage
// Purpose: To read and write values to localStorage with state synchronization.
// Example: const [value, setValue] = useLocalStorage(key, initialValue);

3. useDebounce
// Purpose: To delay the execution of a function until after a specified time has passed since it was last called.
// Example: const debouncedValue = useDebounce(value, delay);

4. usePrevious
// Purpose: To track the previous value of a state or prop.
// Example: const previousValue = usePrevious(currentValue);

5. useToggle
// Purpose: To easily toggle a boolean value between true and false.
// Example: const [isToggled, toggle] = useToggle(initialValue);

6. useEventListener
// Purpose: To add and remove event listeners with automatic cleanup.
// Example: useEventListener('resize', handleResize);

7. useOnClickOutside
// Purpose: To detect clicks outside of a specified element, often used for closing modals or dropdowns.
// Example: useOnClickOutside(ref, () => setOpen(false));

8. useInterval
// Purpose: To set up and clear intervals, ideal for running a function periodically.
// Example: useInterval(() => { // do something }, delay);

9. useTimeout
// Purpose: To set up and clear timeouts.
// Example: useTimeout(() => { // do something }, delay);

10. useMediaQuery
// Purpose: To detect if a media query matches, useful for responsive design.
// Example: const isSmallScreen = useMediaQuery('(max-width: 600px)');

11. useWindowSize
// Purpose: To track the window’s width and height, often for responsive layouts.
// Example: const { width, height } = useWindowSize();

12. useHover
// Purpose: To detect if an element is being hovered.
// Example: const [hoverRef, isHovered] = useHover();

13. useOnlineStatus
// Purpose: To track if the user is online or offline.
// Example: const isOnline = useOnlineStatus();

14. useWhyDidYouUpdate
// Purpose: To log the reasons why a component re-rendered, useful for debugging.
// Example: useWhyDidYouUpdate('ComponentName', props);

15. useAsync
// Purpose: To handle async operations with loading and error states.
// Example: const { execute, status, value, error } = useAsync(fn);

16. useIsomorphicLayoutEffect
// Purpose: Similar to useLayoutEffect but works without warnings in SSR (Server-Side Rendering).
// Example: useIsomorphicLayoutEffect(() => { // side effects }, dependencies);

17. useUpdateEffect
// Purpose: Similar to useEffect, but it skips the initial render.
// Example: useUpdateEffect(() => { // effect }, dependencies);

18. useClipboard
// Purpose: To copy text to the clipboard.
// Example: const { copied, copy } = useClipboard();

19. useForm
// Purpose: To manage form state and validation.
// Example: const { values, handleChange, handleSubmit, errors } = useForm(initialValues, validate);

20. useDarkMode
// Purpose: To toggle between light and dark themes.
// Example: const [isDarkMode, toggleDarkMode] = useDarkMode();
// These are just examples, and the possibilities for custom hooks are vast depending on the needs of your application.