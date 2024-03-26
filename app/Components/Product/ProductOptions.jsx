import {
  Link,
  useLocation,
  useSearchParams,
  useNavigation,
} from '@remix-run/react';



export default function ProductOptions({ options, selectedVariant }) {
  const { pathname, search } = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);

    if (!selectedVariant) {
      return defaultParams;
    }

    for (const { name, value } of selectedVariant.selectedOptions) {
      if (!currentSearchParams.has(name)) {
        defaultParams.set(name, value);
      }
    }

    return defaultParams;
  })();

  // Update the in-flight request data from the 'navigation' (if available)
  // to create an optimistic UI that selects a link before the request completes
  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : paramsWithDefaults;

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {options.map((option) => {
        if (!option.values.length) {
          return;
        }

        // get the currently selected option value
        const currentOptionVal = searchParams.get(option.name);
        return (
          <div key={option.name} className="second-div">
            <h4 className=" mb-3">{option.name}</h4>
            <div className="dropdown flavor">
              <button
                className="btn product-btn dropdown-toggle "
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: '500', fontSize: '1.1rem' }}
              >
                {currentOptionVal}
              </button>
              <div className="dropdown-menu ">
                {option.values.map((value) => {
                  const linkParams = new URLSearchParams(searchParams);
                  const isSelected = currentOptionVal === value;
                  linkParams.set(option.name, value);
                  return (
                    <Link
                      key={value}
                      to={`${pathname}?${linkParams.toString()}`}
                      preventScrollReset
                      replace
                      className="dropdown-item"
                    >
                      {value}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
