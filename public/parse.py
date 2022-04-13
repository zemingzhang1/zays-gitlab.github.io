import  csv
from json.tool import main
import json

inputfile = "public/RvXp.csv"

outputfile = "public/resumeData.json"

data = None

jsonFile= open(outputfile, "r").read()
data = json.loads(jsonFile)
workList = list(data['resume']['work'])
# {"company": "",
# "title": "",
# "years": "",
# "description":""}

with open(inputfile) as file:
    reader = csv.reader(file)
    job = {"company": "","title": "","years": "","description":""}
    indexer = 0
    for row in reader:
        content = row[0]
        if indexer == 0:
            job['title']= content
            indexer+=1
            if indexer >= 3:
                workList.append(job)
                job = {"company": "","title": "","years": "","description":""}
                indexer = 0
                break
        elif indexer == 1:
            job['company']= content
            indexer+=1
        elif indexer == 2:
            job['years']= content
            indexer+=1
        elif (content[:1] == '• ') | (content[:1].islower()):
            print(content)
            job['description'] += " " + content


data['resume']['work'] = json.dumps(workList)
# with open(outputfile, "w") as jsonFile:
#     jsonFile.write(json.dumps(data))
    



