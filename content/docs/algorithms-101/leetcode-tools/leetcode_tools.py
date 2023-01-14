import json
import requests


USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:36.0) Gecko/20100101 Firefox/36.0"
)
LEETCODE_SESSION=''
BADGE_PREFIX = '<img src="https://img.shields.io/badge/'
BADGE_SUFFIX = '.svg?style=flat-square" />\n'


class LeetCodeAPI:
    def __init__(self):
        self.session = requests.Session()
        self.session.cookies["LEETCODE_SESSION"] = LEETCODE_SESSION
        self.res = json.loads(
            self.session.get(
                "https://leetcode.com/api/problems/all",
                headers={"User-Agent": USER_AGENT, "Connection": "keep-alive"},
                timeout=10,
            ).content.decode("utf-8")
        )
        self.problems = self.res["stat_status_pairs"]
        self.problems.sort(key=lambda x: x["stat"]["frontend_question_id"])

        # if len(argv) > 1:
        #   self.problems = self.problems[:2]
        #   self.records = self.records[:2]

        # self.sols_path = "solutions/"
        # self.problems_path = "mkdocs/docs/problems/"
        # self.__create_problems_path_if_needed()


leetcode = LeetCodeAPI()

text_output = Element("pyscriptoutput")

if leetcode.problems:
    text_output.write(leetcode.problems[1], append=True)
else:
    text_output.write("No problems found", append=True)
