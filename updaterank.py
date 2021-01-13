import re
import json
import time
import requests
from git import Repo
from typing import Dict


def get_question_data(user_slug: str) -> Dict:
    url = 'https://leetcode-cn.com/graphql'
    headers = {
        'context-type': 'application/json',
        'x-csrftoken': 'undefined',
        'origin': 'https://leetcode-cn.com',
        'referer': 'https://leetcode-cn.com/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36',
    }
    payload = {
        "operationName": "userPublicProfile",
        "variables": json.dumps({
            "userSlug": user_slug,
        }),
        "query": "query userPublicProfile($userSlug: String!) { userProfilePublicProfile(userSlug: $userSlug) { username haveFollowed siteRanking profile { userSlug realName aboutMe userAvatar location gender websites skillTags contestCount asciiCode ranking { rating ranking currentLocalRanking currentGlobalRanking currentRating ratingProgress totalLocalUsers totalGlobalUsers __typename } skillSet { langLevels { langName langVerboseName level __typename } topics { slug name translatedName __typename } topicAreaScores { score topicArea { name slug __typename } __typename } __typename } socialAccounts { provider profileUrl __typename } __typename } educationRecordList { unverifiedOrganizationName __typename } occupationRecordList { unverifiedOrganizationName jobTitle __typename } submissionProgress { totalSubmissions waSubmissions acSubmissions reSubmissions otherSubmissions acTotal questionTotal __typename } __typename } } "
    }
    r = requests.post(url, data=payload, headers=headers)
    return r.json()


if __name__ == '__main__':
    data = get_question_data('lisiur')['data']['userProfilePublicProfile']
    submission_progress = data['submissionProgress']

    site_ranking = data['siteRanking']  # 全站排名

    ac_total = submission_progress['acTotal']  # 解决的题目
    question_total = submission_progress['questionTotal']  # 题目总数

    ac_submissions = submission_progress['acSubmissions']  # 通过的提交
    total_submissions = submission_progress['totalSubmissions']  # 总提交数

    wa_submissions = submission_progress['waSubmissions']  # 提交未通过数

    other_submissions = submission_progress['otherSubmissions']  #
    re_submissions = submission_progress['reSubmissions']  #

    ac_rate = format(ac_submissions / total_submissions * 100, '.2f') + '%'
    date = time.strftime('%Y/%m/%d', time.localtime())

    s = '|{date}|{ac_total}/{question_total}|{ac_submissions}/{total_submissions}|{ac_rate}|{site_ranking}|\n'\
        .format_map(vars())

    need_update = False
    with open('./README.md', encoding='utf-8') as f:
        lines = f.readlines()
        insert_index = -1
        for line in lines:
            insert_index += 1
            if line.startswith('|:-'):
                insert_index += 1
                break

        if insert_index == len(lines):          # add
            lines.append(s)
            need_update = True
        else:
            judge_line = lines[insert_index]
            match_obj = re.match(r'\|((\d|\/)*)', judge_line)
            latest_date = match_obj.group(1)

            if date == latest_date:             # update
                if lines[insert_index] != s:
                    lines[insert_index] = s
                    need_update = True
            else:                               # insert
                lines.insert(insert_index, s)
                need_update = True

    if need_update:
        with open('./README.md', 'w', encoding='utf-8') as f:
            f.writelines(lines)
            print(lines[4] + lines[6])

        repo = Repo.init(path='.')

        repo.git.add('README.md')
        repo.git.commit('-m', 'docs: update progress')
        print('updated README.md')
    else:
        print('nothing changed')

