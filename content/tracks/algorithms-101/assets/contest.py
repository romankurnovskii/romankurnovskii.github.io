import math
import os
import sys
import time
from collections import defaultdict, Counter


INF = sys.maxsize

inp = (
    lambda: sys.stdin.readline().strip().rstrip("\r\n")
)  # read line as string. Ex: input 1 2 3 => '1 2 3'
inpi = lambda: int(inp())  # read input as integer. input 1 => 1
inpl = lambda: list(
    map(int, inp().split())
)  # read line as list of integers. Ex: [1, 2, 3]
inp_strl = lambda: list(
    inp().split()
)  # read line as list of strings. Ex: ['1', '2', '3']

list_to_string = lambda _v: "".join(map(str, _v))  # [1,2,3] => '123'
list_to_string_list = lambda _v: " ".join(map(str, _v))  # [1,2,'3'] => '1 2 3'


# ------ SOLUTION


def solve():
    # input

    return


def run():
    for _ in range(inp_int()):
        print(solve())


if __name__ == "__main__":
    if os.environ.get("CODE_DEBUG"):
        sys.stdin = open("./input.txt", "r")
        start_time = time.time()
        run()
        print("\n--- %s seconds ---\n" % (time.time() - start_time))
    else:
        run()
