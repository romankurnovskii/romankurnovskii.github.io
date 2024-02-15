import os
import json
import shutil


def rearrange_directories(base_path):
    with open(os.path.join(base_path, "leetcode_problems.json"), "r") as file:
        l_json = json.load(file)

    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)

        if os.path.isdir(item_path) and item.isdigit():
            difficulty = l_json.get(item, {}).get("difficulty")
            if difficulty:
                new_dir_path = os.path.join(base_path, difficulty)

                os.makedirs(new_dir_path, exist_ok=True)
                new_path = os.path.join(new_dir_path, item)
                print(f"Moving '{item_path}' to '{new_path}'")
                shutil.move(item_path, new_path)


base_path = "./hard"
rearrange_directories(base_path)
