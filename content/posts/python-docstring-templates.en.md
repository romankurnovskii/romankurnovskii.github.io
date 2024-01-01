---
title: Python docstring templates
seoTitle: Python docstring templates 2023
description: Python docstring templates
toc: true
tags: [Python, Programming, Template]
series: []
categories: [Programming, Python]
date: 2023-05-24
lastMod: 2023-05-24
featuredImage: https://picsum.photos/700/224?grayscale
---

## Template

```python
def function_name(param1: Type1, param2: Type2, ...) -> ReturnType:
    """Brief description of the function.

    More detailed explanation of the function if necessary. This can span
    multiple lines as needed.

    Args:
        param1 (Type1): Description of param1.
        param2 (Type2): Description of param2.
        ...

    Returns:
        ReturnType: Description of the return value.

    Raises:
        ExceptionType: Explanation of the conditions under which this exception is raised.

    Example:

        >>> function_name(param1_value, param2_value)
        Expected output
    """
    ...
```

## Example

## With Type Hints

```python
def add_numbers(num1: int, num2: int = 5) -> int:
    """Adds two numbers together.

    Args:
        num1 (int): The first number to add.
        num2 (int, optional): The second number to add. Defaults to 5.

    Returns:
        int: The sum of num1 and num2.

    Example:
        >>> add_numbers(3, 2)
        5
    """
    return num1 + num2
```

## Without Type Hints

```python
def add_numbers(num1, num2=5):
    """Adds two numbers together.

    Args:
        num1: The first number to add. Should be of type int.
        num2: The second number to add. Should be of type int. Defaults to 5.

    Returns:
        The sum of num1 and num2. The return value will be of type int.

    Example:
        >>> add_numbers(3, 2)
        5
    """
    return num1 + num2
```

## Resources

- Google Python Style Guide: This is a widely adopted style guide in the Python community. It has a specific section on comments and docstrings that I found particularly helpful: <https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings>

- PEP 257 - Docstring Conventions: This is the Python Enhancement Proposal that describes the conventions for writing good docstrings in Python: <https://www.python.org/dev/peps/pep-0257/>

- PEP 484 - Type Hints: This PEP introduced the concept of type hints to Python, and provides guidelines on how to use them: <https://www.python.org/dev/peps/pep-0484/>
