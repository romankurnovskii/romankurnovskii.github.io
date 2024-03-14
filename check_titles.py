import os


def find_files_with_non_numeric_title(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file in ["index.en.md", "index.ru.md"]:
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:
                    lines = f.readlines()
                    if len(lines) >= 2 and lines[1].startswith("title:"):
                        title = lines[1].strip().split("title:")[1].strip()
                        # Check if title is not numeric
                        numeric = title.replace(".", "", 1)
                        if not numeric[0].isdigit():
                            dir_name = os.path.basename(os.path.dirname(file_path))
                            title = lines[1].strip().split("title:")[1].strip()
                            lines[1] = f"title: {dir_name}. {title}\n"
                            with open(file_path, "w") as f:
                                f.writelines(lines)
                            print(f"Updated file: {file_path}")


root_dir = "content/tracks/algorithms-101/leetcode/"
find_files_with_non_numeric_title(root_dir)
