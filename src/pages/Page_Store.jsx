import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faX, } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck, } from '@fortawesome/free-regular-svg-icons'
import { ImageGalleryData } from '../data/StorePageData'
import SnapDivider from '../components/SnapDivider';
import ShopSelection from '../components/ShopSelection';
import Breadcrumb_Store from '../components/Breadcrumb_Store';

function Page_Store() {
  
  const currenthref = window.location.href
  const [data, setData] = useState( 
    currenthref.match('/snapmerch') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapMerch') return e }) : 
    currenthref.match('/snapframes') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapFrame') return e }) : 
    ImageGalleryData
  );
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [availableSideToggle, setAvailableSideToggle] = useState(false);
  const [priceSideToggle, setPriceSideToggle] = useState(false);
  const [sizeSideToggle, setSizeSideToggle] = useState(false);
  const [dateSideToggle, setDateSideToggle] = useState(false);
  const [stockToggle, setStockToggle] = useState(false);
  const [priceSlider, setPriceSlider] = useState(500)
  const [sizeSmToggle, setSizeSmToggle] = useState(false);
  const [sizeMdToggle, setSizeMdToggle] = useState(false);
  const [sizeLgToggle, setSizeLgToggle] = useState(false);
  const [date2024Toggle, setDate2024Toggle] = useState(false);
  const [date2023Toggle, setDate2023Toggle] = useState(false);
  const [date2022Toggle, setDate2022Toggle] = useState(false);
  const [date2020Toggle, setDate2020Toggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [storeFilterToggle, setStoreFilterToggle] = useState(false);
  const [storeHrefToggle, setStoreHrefToggle] = useState(false);

  function clearSort() {
    stockToggle ? setStockToggle(!stockToggle) : null
    sizeSmToggle ? setSizeSmToggle(!sizeSmToggle) : null
    sizeMdToggle ? setSizeMdToggle(!sizeMdToggle) : null
    sizeLgToggle ? setSizeLgToggle(!sizeLgToggle) : null
    date2024Toggle ? setDate2024Toggle(!date2024Toggle) : null
    date2023Toggle ? setDate2023Toggle(!date2023Toggle) : null
    date2022Toggle ? setDate2022Toggle(!date2022Toggle) : null
    date2020Toggle ? setDate2020Toggle(!date2020Toggle) : null
    searchQuery != '' ? setSearchQuery('') : null
    priceSlider <= 500 ? setPriceSlider(500) : null

    setData(
      currenthref.match('/snapmerch') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapMerch') return e }) : 
      currenthref.match('/snapframes') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapFrame') return e }) : 
      ImageGalleryData
    );
  }

  function sortByName() {
    const nextData = [...data].sort((a,b) => {
      const nameA = a.description.toUpperCase();
      const nameB = b.description.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
    }); 
    setData(nextData);
  }
  function sortByNameReversed() {
    const nextData = [...data].sort((a,b) => {
      const nameA = a.description.toUpperCase();
      const nameB = b.description.toUpperCase();
      if(nameA < nameB) {
        return 1;
      }
      if(nameA > nameB) {
        return -1;
      }
      return 0;
    }); 
    setData(nextData);
  }
  function sortByPrice() {
    const nextData = [...data].sort((a,b) => {
      return parseFloat(a.price) < parseFloat(b.price) ? 1 : -1;
    });
    setData(nextData)
  }
  function sortByPriceReversed() {
    const nextData = [...data].sort((a,b) => {
      return parseFloat(a.price) > parseFloat(b.price) ? 1 : -1;
    });
    setData(nextData)
  }
  function sortByDate() {
    const nextData = [...data].sort((a,b) => {
      if(a.date < b.date){ 
        return -1;
      }
      if(a.date > b.date){ 
      return 1;
      }
      return 0;
    });
    setData(nextData)
  }
  function sortByDateReversed() {
    const nextData = [...data].sort((a,b) => {
      if(a.date < b.date){ 
        return 1;
      }
      if(a.date > b.date){ 
      return -1;
      }
      return 0;
    });
    setData(nextData)
  }

  
  function stockFilter() {
    switch (stockToggle == true) {
      case false:
        var nextData = [...data].filter((e) => {
          if(e.inStock == true) {
            return e.inStock
          }
        });
        setData(nextData)
        break;
      case data.length < 0:
        setData(ImageGalleryData)
      break;
        
      case sizeSmToggle == true: 
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        
        switch (sizeSmToggle == true) {
          case date2024Toggle == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2023Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2022Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2020Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
        }
      break;
      case sizeMdToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )

        switch (sizeMdToggle == true) {
          case date2024Toggle == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Medium') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2023Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Medium') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2022Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Medium') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2020Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Medium') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
        }
        break;
      case sizeLgToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )

        switch (sizeLgToggle == true) {
          case date2024Toggle == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2023Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2022Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2020Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
        }
      break;
        
      case date2020Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
      break;
      case date2022Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
      case date2023Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
      case date2024Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;

      case priceSlider <= 500 && priceSlider > 9:
        var prevData = [...ImageGalleryData].filter((e) => {
          if(parseFloat(e.price) < priceSlider) {
            return e.price
          }
        });
        setData(prevData)
        break;
      default:
        null;
    }
    setStockToggle(!stockToggle)
  }

  const handlePriceFilter = (e) => {
    setData(
      [...data].filter((e) => {
        if(parseFloat(e.price) < priceSlider) {
          return e.price
        }
      })
    )
    setPriceSlider(e.target.value)
  }
  function priceFilter() {
    switch (priceSlider >= 0 ) {       
      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.inStock == true && parseFloat(e.price) < priceSlider) {
              return e.inStock
            }
          })
        )
        
        if(date2024Toggle == true || date2023Toggle == true || date2022Toggle == true || date2020Toggle == true || sizeSmToggle == true || sizeMdToggle == true || sizeLgToggle == true) {
          switch (stockToggle == true) {
            case date2024Toggle == true && (sizeSmToggle || sizeMdToggle || sizeLgToggle) == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
            break;
            case date2023Toggle == true && (sizeSmToggle || sizeMdToggle || sizeLgToggle) == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
            break;
            case date2022Toggle == true && (sizeSmToggle || sizeMdToggle || sizeLgToggle) == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
            break;
            case date2020Toggle == true && (sizeSmToggle || sizeMdToggle || sizeLgToggle) == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
            break;

            case sizeSmToggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
              )
      
              switch (sizeSmToggle == true) {
                case date2024Toggle == true: 
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Small') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2023Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Small') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2022Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Small') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2020Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Small') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
              }
            break;
            case sizeMdToggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
                )
      
                switch (sizeMdToggle == true) {
                  case date2024Toggle == true: 
                    setData(
                      [...ImageGalleryData].filter((e) => {
                        if(e.tags.includes('Medium') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                          return e
                        }
                      })
                    )
                  break;
                  case date2023Toggle == true:
                    setData(
                      [...ImageGalleryData].filter((e) => {
                        if(e.tags.includes('Medium') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                          return e
                        }
                      })
                    )
                  break;
                  case date2022Toggle == true:
                    setData(
                      [...ImageGalleryData].filter((e) => {
                        if(e.tags.includes('Medium') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                          return e
                        }
                      })
                    )
                  break;
                  case date2020Toggle == true:
                    setData(
                      [...ImageGalleryData].filter((e) => {
                        if(e.tags.includes('Medium') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                          return e
                        }
                      })
                    )
                  break;
                }
              break;
            case sizeLgToggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
              )
      
              switch (sizeLgToggle == true) {
                case date2024Toggle == true: 
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Large') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2023Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Large') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2022Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Large') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
                case date2020Toggle == true:
                  setData(
                    [...ImageGalleryData].filter((e) => {
                      if(e.tags.includes('Large') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                        return e
                      }
                    })
                  )
                break;
              }
            break;
      
            case date2020Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('2020') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
                )
              break;
            case date2022Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('2022') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
                )
              break;
            case date2023Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('2023') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
                )
              break;
            case date2024Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('New') && parseFloat(e.price) < priceSlider && e.inStock == true) {
                    return e
                  }
                })
                )
              break;
          }
        }
      break;

      case sizeSmToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )

        switch (sizeSmToggle == true) {
          case date2024Toggle == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2023Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2022Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2020Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Small') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
        }
      break;
      case sizeMdToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )

          switch (sizeMdToggle == true) {
            case date2024Toggle == true: 
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Medium') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                    return e
                  }
                })
              )
            break;
            case date2023Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Medium') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                    return e
                  }
                })
              )
            break;
            case date2022Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Medium') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                    return e
                  }
                })
              )
            break;
            case date2020Toggle == true:
              setData(
                [...ImageGalleryData].filter((e) => {
                  if(e.tags.includes('Medium') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                    return e
                  }
                })
              )
            break;
          }
        break;
      case sizeLgToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )

        switch (sizeLgToggle == true) {
          case date2024Toggle == true: 
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2023Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2022Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
          case date2020Toggle == true:
            setData(
              [...ImageGalleryData].filter((e) => {
                if(e.tags.includes('Large') && e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
                  return e
                }
              })
            )
          break;
        }
      break;

      case date2020Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2020') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
      case date2022Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2022') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
      case date2023Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('2023') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
      case date2024Toggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('New') && parseFloat(e.price) < priceSlider) {
              return e
            }
          })
          )
        break;
        
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e.price
            }
          })
        )
        break;
      case false:
        setData(null)
        break;
      default:
        null;
    }
  }

  function sizeSmFilter() {
    setSizeSmToggle(!sizeSmToggle)
    setSizeMdToggle(false)
    setSizeLgToggle(false)

    switch (sizeSmToggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;
        
      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;

      case date2024Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2024')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2024') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2023Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2023')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2023') && stockToggle == true && e.inStock == true) {
              return e 
            }
          })
        )
        break;
      case date2022Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2022')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2022') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2020Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2020')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2020') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      
      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
          setData(
            [...ImageGalleryData].filter((e) => {
              if(parseFloat(e.price) < priceSlider) {
                return e
              }
            })
          )
          break;
      default:
        null
    }
  }
  function sizeMdFilter() {
    setSizeMdToggle(!sizeMdToggle)
    setSizeSmToggle(false)
    setSizeLgToggle(false)

    switch (sizeMdToggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;

      case date2024Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2024')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2024') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2023Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2023')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2023') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2022Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2022')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2022') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2020Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2020')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2020') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;

      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
          setData(
            [...ImageGalleryData].filter((e) => {
              if(parseFloat(e.price) < priceSlider) {
                return e
              }
            })
          )
          break;
      default:
        null
    }
  }
  function sizeLgFilter() {
    setSizeLgToggle(!sizeLgToggle)
    setSizeSmToggle(false)
    setSizeMdToggle(false)

    switch (sizeLgToggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              if(date2024Toggle == true) {
                return e.tags.includes('New') ? e : null; 
              }
              if(date2023Toggle == true) {
                return e.tags.includes('2023') ? e : null; 
              }
              if(date2022Toggle == true) {
                return e.tags.includes('2022') ? e : null; 
              }
              if(date2020Toggle == true) {
                return e.tags.includes('2020') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      
      case date2024Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2024')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2024') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2023Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2023')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2023') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2022Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2022')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2022') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;
      case date2020Toggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2020')) {
              return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2020') && stockToggle == true && e.inStock === true) {
              return e 
            }
          })
        )
        break;

      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        break;
      default:
        null
    }
  }

  function date2024Filter() {
    setDate2024Toggle(!date2024Toggle)
    setDate2023Toggle(false)
    setDate2022Toggle(false)
    setDate2020Toggle(false)
    
    switch (date2024Toggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2024')) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2024') && stockToggle == true && e.inStock === true) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;

      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        break;
      default:
        null
    }
  }
  function date2023Filter() {
    setDate2023Toggle(!date2023Toggle)
    setDate2022Toggle(false)
    setDate2020Toggle(false)
    setDate2024Toggle(false)

    switch (date2023Toggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2023')) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2023') && stockToggle == true && e.inStock === true) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;



      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        break;
      default:
        null
    }
  }
  function date2022Filter() {
    setDate2022Toggle(!date2022Toggle)
    setDate2020Toggle(false)
    setDate2024Toggle(false)
    setDate2023Toggle(false)

    switch (date2022Toggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2022')) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2022') && stockToggle == true && e.inStock === true) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;

      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        break;
      default:
        null
    }
  }
  function date2020Filter() {
    setDate2020Toggle(!date2020Toggle)
    setDate2024Toggle(false)
    setDate2023Toggle(false)
    setDate2022Toggle(false)

    switch (date2020Toggle) {
      case false:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && stockToggle != true && e.date.includes('/2020')) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
            if(parseFloat(e.price) < priceSlider && e.date.includes('/2020') && stockToggle == true && e.inStock === true) {
              if(sizeSmToggle == true) {
                return e.tags.includes('Small') ? e : null; 
              }
              if(sizeMdToggle == true) {
                return e.tags.includes('Medium') ? e : null; 
              }
              if(sizeLgToggle == true) {
                return e.tags.includes('Large') ? e : null; 
              }
              else return e;
            }
          })
        )
        break;

      case sizeLgToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Large') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Large') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeMdToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Medium') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Medium') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;
      case sizeSmToggle == true:
        setData(  
          [...ImageGalleryData].filter((e) => {
            if(e.tags.includes('Small') && parseFloat(e.price) < priceSlider && stockToggle != true) {
              return e
            }
            if(e.tags.includes('Small') && stockToggle == true && e.inStock === true && parseFloat(e.price) < priceSlider) {
              return e 
            }
          })
        )
        break;



      case stockToggle == true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider && e.inStock == true) {
              return e
            }
          })
        )
        break;
      case true:
        setData(
          [...ImageGalleryData].filter((e) => {
            if(parseFloat(e.price) < priceSlider) {
              return e
            }
          })
        )
        break;
      default:
        null
    }
  }

  function handleStoreFilterBars() {
    setStoreFilterToggle(!storeFilterToggle)
    availableSideToggle ? setAvailableSideToggle(!availableSideToggle) : null;
    priceSideToggle ? null : setPriceSideToggle(!priceSideToggle);
    sizeSideToggle ? null : setSizeSideToggle(!sizeSideToggle);
    dateSideToggle ? null : setDateSideToggle(!dateSideToggle);
  }

  let dropdownRef = useRef();
  useEffect(() => {
    let handleOutBoundClick = (e) => {
      if(!dropdownRef.current.contains(e.target)) {
        setDropdownToggle(false);
      }
    };
    document.addEventListener('click', handleOutBoundClick);
    return() => {
      document.removeEventListener('click', handleOutBoundClick);
    }
  });

  const searchQueue = (e)=> {
    var nextData = e.target.value  
    setData(
      [...ImageGalleryData].filter((e) => {
        if((e.description.toUpperCase().includes(nextData) || e.description.toLowerCase().includes(nextData) || e.description.includes(nextData)) == true) {
          switch (currenthref.includes('/store/')) {
            case true:
              if(currenthref.includes(e.brand.toLowerCase()) == true) return e;
              break;
            case false:
              return e;
            default:
              null;
          }
        }
      })
    );
    if(nextData == '') {
      setData(
        currenthref.match('/snapmerch') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapMerch') return e }) : 
        currenthref.match('/snapframes') ? [...ImageGalleryData].filter((e) => {if(e.brand == 'SnapFrame') return e }) : 
        ImageGalleryData
      )
    }
    setSearchQuery(e.target.value)
  };

  let galleryRef = useRef();
  useEffect(()=> {
    const galleryFilter = ()=>{
      switch (currenthref.includes("/store/")) {
        case true:
          setData(
            [...data].filter((e)=> {
              switch (e.brand) {
                case 'SnapMerch':
                  return currenthref.includes('/snapmerch') == true ? e : null;
                case 'SnapFrame':
                  return currenthref.includes('/snapframes') == true ? e : null;
                default:
              }
            })
          )   
          setStoreHrefToggle(true)
        break;
        case false:
          switch (currenthref.includes("/store")) {
            case true:
              if(storeHrefToggle === true) {
                setData([...ImageGalleryData])
              }
              setStoreHrefToggle(false)
            break;
            case false: 
            throw console.error("galleryref error");
          }
        break;
      }
    }
    let handleWheel = (e)=>{
      var filter = document.getElementById("StoreFilter").classList
       switch (e.deltaY <= 0) {
        case true:
          filter.replace("md:top-[4.8rem]", "md:top-[6.8rem]")
          break;
        case false:
          filter.replace("md:top-[6.8rem]", "md:top-[4.8rem]")
          break;
       } 
    }
    document.addEventListener('click', galleryFilter);
    document.addEventListener('load', galleryFilter);
    document.addEventListener('wheel', handleWheel);

    return() => {
      document.removeEventListener('click', galleryFilter);
      document.removeEventListener('load', galleryFilter);
      document.removeEventListener('wheel', handleWheel);
    }
  });
  
  // *(main)* \\
  return (
    <div id='Comp_StorePage' 
    className={`Comp_StorePage 
    w-screen h-auto overflow-y-clip
    `}>
      <Breadcrumb_Store />
      {currenthref.match('/store/') ? 
      <SnapDivider /> :
      <ShopSelection />}
      
      <div className="StorePageWrapper w-full h-full md:h-[92%] md:flex justify-center bg-gradient-to-b from-slate-200 to-neutral-300">
        <div id='StoreFilter'
        className={`
          w-full md:w-[35%] lg:w-[22rem] h-[40rem] md:min-h-[44rem] 
          sticky top-[25rem] md:top-[4.8rem] flex-col justify-start
          max-md:border-t-[1px] border-black 
          bg-gray-200 md:bg-transparent transition-all duration-300
          ${storeFilterToggle ? "flex z-[2] overflow-y-auto" : "max-md:hidden"}
          ${storeFilterToggle && priceSideToggle ? 'top-0' : 'top-[16rem]'}
          ${storeFilterToggle && sizeSideToggle ? 'top-0' : 'top-[13rem]'}
          ${storeFilterToggle && dateSideToggle ? 'top-0' : 'top-[11rem]'}
          ${storeFilterToggle && (priceSideToggle || sizeSideToggle) ? 'top-0' : 'top-[4.5rem]'}
          ${storeFilterToggle && (priceSideToggle || dateSideToggle) ? 'top-0' : 'top-[4.5rem]'}
          ${storeFilterToggle && (sizeSideToggle || dateSideToggle) ? 'top-0' : 'top-[4.5rem]'}
        `}>

          <div id='AvailableSideFilter' className={`${availableSideToggle ? 'h-12' : 'h-28' } AvailableSideFilter w-full px-8 overflow-hidden border-b-[1px] border-black transition-all duration-300`}>
            <div className='w-full h-10 mt-2 flex justify-between text-lg'>
              <span>Availabillity</span>
              <button className='size-4'>
                <FontAwesomeIcon 
                icon={faChevronUp} 
                className={`${availableSideToggle ? 'rotate-180' : 'rotate-0'} hidden md:block transition-all duration-300`}
                onClick={() => {setAvailableSideToggle(!availableSideToggle)}} />
                <FontAwesomeIcon 
                icon={faX} 
                className={`block md:hidden transition-all duration-300`}
                onClick={() => {storeFilterToggle ? setStoreFilterToggle(!storeFilterToggle) : setAvailableSideToggle(!availableSideToggle)}} />
              </button>
            </div>
            <div className='w-full h-10 flex gap-3 relative top-2'>
              <button 
              className={`${stockToggle ? 'bg-blue-500' : 'bg-zinc-500'} group w-14 h-7 rounded-full cursor-pointer transition-all duration-[275]`} 
              onClick={stockFilter}>
                <div className={`${stockToggle ? 'ml-8' : 'ml-1'} size-5 ml-1 border-[2px] group-hover:border-[3px] border-neutral-300 group-hover:border-white rounded-full bg-white group-hover:bg-slate-200 transition-all duration-[325]`}></div>
              </button>
              <span>In Stock</span>
            </div>
          </div>
          <div id='PriceSideFilter' className={`${priceSideToggle ? 'h-12' : 'h-36' } PriceSideFilter w-full overflow-hidden border-b-[1px] border-black transition-all duration-300`}>
            <div className='w-full h-10 px-8 mt-2 flex justify-between text-lg'>
              <span>Price</span>
              <button className='size-4'>
                <FontAwesomeIcon 
                icon={faChevronUp} 
                className={`${priceSideToggle ? 'rotate-180' : 'rotate-0' } transition-all duration-300`}
                onClick={() => setPriceSideToggle(!priceSideToggle)} />
              </button>
            </div>
            <div className='w-full h-20 px-8'>
              <input 
              type='range' 
              min={'0'} max={'500'} 
              value={priceSlider} 
              onChange={handlePriceFilter} 
              onMouseUp={()=>priceFilter()}
              draggable={'false'}
              step={5}
              id='PriceSlider' 
              className={` PriceSlider 
              w-full h-2 z-[2] cursor-pointer transition-all duration-[325]
              ${data.length == ImageGalleryData.length || data.length == [...ImageGalleryData].filter((e) => {if(currenthref.includes(e.brand.toLowerCase())) return e }).length ? 'bg-blue-500/90' : 
              priceSlider <= 0 ? 'bg-slate-500' : 
              'bg-blue-800/90'}`} />
            </div>
            <div className='PriceSliderText w-full h-8 mx-auto relative bottom-12 text-lg font-bold text-white rounded-3xl'>
              <span className='text-center ml-4 p-1'>
                Price Range:
              </span>
              <span className='text-center ml-4 p-1 rounded-3xl bg-neutral-300'>
                $0 - ${priceSlider}
              </span>
            </div>
          </div>
          <div id='SizeSideFilter' className={`${sizeSideToggle ? 'h-12' : 'h-52' } SizeSideFilter w-full px-8 overflow-hidden border-b-[1px] border-black transition-all duration-300`}>
            <div className='w-full h-10 mt-2 flex justify-between text-lg'>
              <span>Size</span>
              <button className='size-4'>
                <FontAwesomeIcon 
                icon={faChevronUp} 
                className={`${sizeSideToggle ? 'rotate-180' : 'rotate-0' } transition-all duration-300`}
                onClick={() => setSizeSideToggle(!sizeSideToggle)} />
              </button>
            </div>
            <div className='StoreSizeFilter w-full h-32 px-2 flex flex-col gap-1 text-2xl'>
              <div className={`SizeSmall w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15'
                onClick={sizeSmFilter}>
                  <FontAwesomeIcon icon={faSquare} className={`${sizeSmToggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${sizeSmToggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>Small</span>
              </div>
              <div className={`SizeMedium w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15' 
                onClick={sizeMdFilter}>
                  <FontAwesomeIcon icon={faSquare} className={`${sizeMdToggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${sizeMdToggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>Medium</span>
              </div>
              <div className={`SizeLarge w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15' 
                onClick={sizeLgFilter}>
                  <FontAwesomeIcon icon={faSquare} className={`${sizeLgToggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${sizeLgToggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>Large</span>
              </div>
            </div>
          </div>
          <div id='DateSideFilter' className={`${dateSideToggle ? 'h-12' : 'h-60' } DateSideFilter w-full px-8 overflow-hidden border-b-[1px] border-black transition-all duration-300`}>
            <div className='w-full h-10 mt-2 flex justify-between text-lg'>
              <span>Date</span>
              <button className='size-4'>
                <FontAwesomeIcon 
                icon={faChevronUp} 
                className={`${dateSideToggle ? 'rotate-180' : 'rotate-0' } transition-all duration-300`}
                onClick={() => setDateSideToggle(!dateSideToggle)} />
              </button>
            </div>
            <div className='StoreDateFilter w-full h-40 px-2 flex flex-col gap-1 text-2xl'>
              <div className={`Date2024 w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15'
                onClick={date2024Filter}>
                  <FontAwesomeIcon icon={faSquare} className={`${date2024Toggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${date2024Toggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>2024</span>
              </div>
              <div className={`Date2023 w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15' 
                onClick={date2023Filter}>
                  <FontAwesomeIcon icon={faSquare} className={`${date2023Toggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${date2023Toggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>2023</span>
              </div>
              <div className={`Date2022 w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15' 
                onClick={date2022Filter}>
                  <FontAwesomeIcon icon={faSquare} className={`${date2022Toggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${date2022Toggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>2022</span>
              </div>
              <div className={`Date2020 w-full h-8 m-auto`}>
                <button 
                className='peer size-8 hover:bg-black/15' 
                onClick={date2020Filter}>
                  <FontAwesomeIcon icon={faSquare} className={`${date2020Toggle ? 'hidden' : 'block'} size-full inline-block`} />
                  <FontAwesomeIcon icon={faSquareCheck} className={`${date2020Toggle ? 'inline-block' : 'hidden'} size-full`} />
                </button>
                <span className='pl-2 hover:underline peer-hover:underline'>2020</span>
              </div>
            </div>
          </div>

        </div>
        <div 
        id='ImageGalleryWrapper'
        className={`ImageGalleryWrapper  
        w-full md:w-[60%] h-full flex flex-col 
        md:border-x-[1px] border-black bg-gradient-to-b from-gray-100 to-neutral-200
        ${storeFilterToggle ? 'relative bottom-[40rem]' : ''}`}
        >

          <div className="ImageGallerySort w-full h-10 z-[1] mt-1 sticky md:static top-[4.8rem] flex justify-evenly text-md font-bold border-b-[2px] rounded-[5px] border-black bg-gray-100">
            <div className='Section1 w-1/2 h-full md:hidden'>
              <button 
                id="ShopFilterBtn"
                className="
                w-20 h-6 ml-4 mt-1.5 mr-2 flex flex-col justify-center md:hidden 
                text-right text-white border-2 border-white rounded-xl 
                bg-gradient-to-tr from-black to-gray-600/80 
                shadow-gray-800 shadow-sm transition-all
                cursor-pointer hover:scale-105 hover:animate-[btnOut_150ms_ease-in]"
                onMouseEnter={() => {document.getElementById('ShopFilterBtn').classList.add('animate-[btnIn_150ms_ease-in]')}}
                onClick={handleStoreFilterBars}>
                  <span className='mx-auto font-bold'>
                    Filter
                  </span>
              </button>
            </div>
            <div className='Section_SearchQuery w-[80%] md:w-[40%] h-8 m-auto flex justify-evenly rounded-[49px] border-black border-2 bg-white'>
              <form 
              action={`/search-results/${searchQuery}`} 
              className='SearchForm w-[90%] h-full my-auto'>
                <input 
                  type='text' 
                  placeholder='Search...' 
                  id='SearchInput' 
                  className='peer w-full h-full my-auto focus:outline-none rounded-full' 
                  value={searchQuery}
                  onChange={(e)=>{searchQueue(e)}} 
                />
              </form>
            </div>
            <div className='Section2 w-1/2 h-full max-sm:mr-4 flex justify-end'>
              <div id='SortDropdownWrapper' className='SortToggleDropdown group z-[1] w-28 h-6 my-auto'>
                <button ref={dropdownRef} onClick={() => {setDropdownToggle(!dropdownToggle)}} className='SortDropdownBtn mx-auto flex justify-evenly'>
                  <span>Sort</span>
                  <FontAwesomeIcon icon={faChevronDown} className={`${dropdownToggle ? 'rotate-180' : 'rotate-0'} size-3 ml-1 my-auto transition-all duration-300`} />
                </button>
                <div id='SortDropdown' className={`${dropdownToggle ? 'block' : 'hidden'} SortDropdown group w-full h-40 mt-1 flex flex-col justify-evenly text-xs sm:text-[0.84rem] rounded-b-xl shadow-md shadow-black bg-gradient-to-b from-neutral-50 to-neutral-200`}>
                  <button onClick={sortByDate} className='hover:bg-black/30'>New</button>
                  <button onClick={sortByName} className='hover:bg-black/30'>Alphabetical, A-Z</button>
                  <button onClick={sortByNameReversed} className='hover:bg-black/30'>Alphabetical, Z-A</button>
                  <button onClick={sortByPriceReversed} className='hover:bg-black/30'>Price, low to high</button>
                  <button onClick={sortByPrice} className='hover:bg-black/30'>Price, high to low</button>
                  <button onClick={sortByDate} className='hover:bg-black/30'>Date, new to old</button>
                  <button onClick={sortByDateReversed} className='hover:bg-black/30'>Date, old to new</button>
                </div>
              </div>
              <span className='ProductValue w-28 h-6 my-auto text-left'>Products: {data.length}</span>
            </div>
          </div>
          <div id='StoreImageGallery'
          ref={galleryRef}
          className={
          `StoreImageGallery
          w-full min-h-[42rem] md:min-h-[43rem]
          py-2 gap-y-2 
          px-[5%] md:px-[1%] gap-x-[5%] md:gap-x-[1%]
          bg-black/20
          flex justify-start content-start flex-wrap
          `}>
            {data.sort((a,b)=>{
              if(a.discountPrice < b.discountPrice) {
                return 1;
              }
              if(a.discountPrice > b.discountPrice) {
                return -1;
              }
            }).map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="ImageCardWrapper 
                  w-[full] h-[17rem] lg:h-[24rem]
                  basis-[47.5%] md:basis-[24.25%] flex flex-col gap-0.5 
                  rounded-2xl shadow-md shadow-black/50 bg-black
                  ">
                    <div className='ImageCardImg group w-full h-[70%] flex justify-center border-[1px] border-b-0 rounded-t-2xl border-zinc-300 hover:border-none bg-white'>
                      <Link to={`/store/item/${item.link}`} className='size-full flex justify-start overflow-hidden'>
                        <img 
                        src={item.image}
                        alt={`image ${item.id}`} 
                        className='
                        size-full mx-auto object-contain lg:object-scale-down flex-[1_0_100%] group-hover:order-last 
                        rounded-t-2xl group-hover:blur-sm transition duration-700' 
                        />
                        <div className='AppearOnHover 
                        size-full mx-auto group-hover:order-first flex-[1_0_100%]
                        rounded-t-2xl transition duration-700'>
                          <img 
                          src={item.image} 
                          alt={`image ${item.id}`}
                          className={`w-full h-[80%] mx-auto relative top-[10%] object-fill group-hover:blur-sm object-center transition duration-500`} />
                          <img 
                          src={item.activeImage} 
                          alt={`image on hover ${item.id}`}
                          className={`w-full h-3/4 relative bottom-2/3 mx-auto object-cover lg:object-fill object-center opacity-60 group-hover:opacity-100 transition duration-500`} />
                        </div>
                      </Link>
                      {
                        !item.inStock ? 
                        <div className={`w-[6rem] lg:w-[8rem] h-10 lg:h-16 z-[0] mt-20 lg:pt-5 opacity-80 group-hover:opacity-100 absolute rounded-3xl underline underline-offset-4 text-center text-sm lg:text-base font-bold text-white bg-black/40 group-hover:bg-black/80 transition duration-300`}>OUT OF STOCK</div> :
                        null
                      }
                    </div>
                    <div className='ImageCardTextWrapper w-full h-[30%] px-2 flex flex-col justify-evenly rounded-b-2xl text-left text-base font-bold text-black bg-gradient-to-br from-white to-neutral-200'>
                      {(date2024Toggle || date2023Toggle || date2022Toggle || date2020Toggle || sizeSmToggle || sizeMdToggle || sizeLgToggle) == true ? 
                        null : 
                        <span className='w-20 shadow-sm shadow-neutral-500 text-center text-xs text-white bg-gradient-to-br from-neutral-900 to-slate-400 border-2 rounded-full'>
                          {item.brand}
                        </span>
                      }
                      <span className='text-xs lg:text-base leading-4 md:leading-3 '>
                        {item.description}
                      </span>
                      <span className='ImageCardTextBlack md:text-xs lg:text-lg underline text-white'>
                        {item.discountPrice.toLocaleString().length >= 1 ? 
                        <><span className='line-through text-xs mr-2'>${item.price}</span>{item.discountPrice}</> : 
                        <>${item.price}</>
                        }
                      </span>
                      <span className='text-xs text-center'>
                        {(date2024Toggle || date2023Toggle || date2022Toggle || date2020Toggle || sizeSmToggle || sizeMdToggle || sizeLgToggle) == true ? 
                        item.tags : null}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
            <div className={`EmptyCard ${data.length > 0 ? 'hidden' : 'block'} h-[17rem] lg:h-[24rem] basis-[24.25%] flex justify-center border-[1px] border-gray-600/60 shadow-md shadow-black/50 bg-gradient-to-bl from-slate-300/50 to-black/50 rounded-3xl`}>
              <div className='ClearFilterBtn size-40 my-auto py-2 flex flex-col justify-center text-xl text-center text-white'>
                No results found. <br/>
                <button 
                id="ShopClearFiltersBtn"
                className="
                w-36 h-12 mx-auto mt-2 flex flex-col justify-center 
                text-right text-white border-4 border-white rounded-xl 
                bg-gradient-to-tr from-black to-gray-600/80 
                shadow-gray-800 shadow-md transition-all
                cursor-pointer hover:scale-105 animate-[btnIn_150ms_ease-in] hover:animate-[btnOut_150ms_ease-in]"
                onClick={clearSort}>
                  <span className='mx-auto font-bold'>
                    Clear Filters
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page_Store

