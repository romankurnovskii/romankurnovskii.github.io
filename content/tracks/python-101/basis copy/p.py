import os

def rename_files(folder_path):
    # List all files in the folder
    files = os.listdir(folder_path)
    
    # Loop through the files and rename any file that starts with 3 digits and "_"
    for filename in files:
        if filename[:3].isdigit() and filename[3] == '_':
            new_name = filename[4:]
            os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_name))

rename_files('/Users/r/Desktop/github/romankurnovskii.github.io/content/tracks/python-101/basis')
