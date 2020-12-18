upload a file to s3 - file and destination
aws s3 cp ./path/andorfile.html s3://webguyty-portfolio

add --recursive flag
aws s3 cp ./dist s3://webguyty-portfolio --recursive

synchronizing files and folders with s3
aws s3 sync ./dist s3://webguyty-portfolio

synchronizing files and folders (and deletions) with s3
aws s3 sync ./dist s3://webguyty-portfolio --delete

delete all files from bucket
aws s3 rm s3://webguyty-portfolio --recursive

list all files in directory
aws s3 ls s3://webguyty-portfolio

#####

Code to run after building locally:
aws s3 sync ./dist s3://webguyty-portfolio --delete

#####
