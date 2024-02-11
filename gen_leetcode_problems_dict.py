import os
import json


def generate_leetcode_json(base_dir):
    leetcode_data = {}
    base_url = "https://romankurnovskii.com"
    
    for difficulty in ['easy', 'medium', 'hard']:
        difficulty_dir = os.path.join(base_dir, difficulty)
        if not os.path.exists(difficulty_dir):
            continue  # Skip if difficulty directory doesn't exist
        
        for problem in os.listdir(difficulty_dir):
            problem_dir = os.path.join(difficulty_dir, problem)
            if not os.path.isdir(problem_dir):
                continue  # Skip if it's not a directory
            
            problem_data = {
                "difficulty": difficulty.capitalize(),
                "languages": {}
            }
            
            for lang_file in os.listdir(problem_dir):
                if lang_file.startswith("index.") and lang_file.endswith(".md"):
                    lang = lang_file.split('.')[1]  # Get the 'en' or 'ru' part
                    lang_url = f"{base_url}/{lang}/tracks/algorithms-101/leetcode/{difficulty}/{problem}/"
                    problem_data["languages"][lang] = lang_url
            
            leetcode_data[problem] = problem_data
    
    return leetcode_data

# Define the base directory path
base_dir = "./content/tracks/algorithms-101/leetcode"

# Generate the leetcode problems data
leetcode_problems = generate_leetcode_json(base_dir)

# Write the data to leetcode-problems.json
with open("static_files/leetcode-problems.json", "w") as json_file:
    json.dump(leetcode_problems, json_file, indent=2)

print("LeetCode problems JSON file has been generated.")
