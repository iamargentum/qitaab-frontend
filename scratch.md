### what are the things that we may need to track?
- name
- image
- states
- api calls
- description
- passed props
- props being used
- file that the component is defined in


name is plain text
image is regular image, just the source url
states - can have details like type
api calls - can have details like slug, authenticated or not, etc.
description - plain text for now (could be great if markdown can be supported)
passed props and props being used - can have details like type
file that the component is defined in - can have details like directory in which the file lies


## todos

- create node creator
- create relationship creator

#### node creator todos
~~- create a dropdown that selects what type of node this is~~
~~- depending on the type, show relevant form~~

### relationship creator todos
- 


## what are the different properties of different nodes?

### `Component` type has all the ones stated above, from line #2-#9

### `File`
    - filename
    - directory from project root

### `API`
    - url/slug
    - request object



# thoughts

## relationship creator thoughts
- relationships can be created between - (order matters)
    - component and other component
    - component and api/api and component
    - component and file/file and component
- the only relationship that exists between a component and another component is a parent-child relationship
- the only relationship that exists between an api and a component is that a component calls the api using some method
- an api and file cannot be directly related

## node creator
- a component can only be associated with an api/file that is already created
- there should be an option to opt out of associating the component node with api/file