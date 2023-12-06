# 의견
확장앱을 수정하거나, 추가하고 싶은 기능이 있는 경우 본 문서를 참고해 주시기 바랍니다!

### 1. issue 확인

* 먼저 작업을 진행하기 전에, [이슈](https://github.com/SAMEZ-0129/BUFS-Direct/issues)목록을 확인해주세요.
* [이슈](https://github.com/SAMEZ-0129/BUFS-Direct/issues) 목록에 있다면, 댓글을 남겨주세요. 확인 후 전달드리겠습니다.
* [이슈](https://github.com/SAMEZ-0129/BUFS-Direct/issues) 목록에 없는 기능이라면, `New issue` 버튼을 클릭하여 이슈를 등록해주세요.

### 2. Pull Request

Pull 요청방법

1. 현재 레포 `fork`하기
2. 새 브랜치 만들기
3. 개발하기
4. Upstream으로부터 rebase하기
5. whale에서 테스트하기
6. Pull Request 보내기

#### Step 1: 현재-레포-fork하기

현재 레포의 `fork` 버튼을 눌러주세요.

#### Step 2: 새-브랜치-만들기

PR을 보내기 위해 fork한 레포지토리에서 브랜치를 만들어주세요. 브랜치 이름은 수정하려는 내용을 간단하게 표현해주세요. 따로 컨벤션은 없습니다. 자유롭게 써주세요.

```
$ git checkout -b new_button
```

#### Step 3: 개발하기

개발이 완료되면 브랜치에 수정된 내용을 커밋해주세요.

```
$ git add -A
$ git commit
```

커밋 메세지는 커밋 내용을 요약해서 작성해주세요. 이 또한 자유롭게 써주시면 됩니다.

#### Step 4: Upstream으로부터-rebase하기

Pull Request를 보내기 전에 upstream 소스를 rebase 해야 합니다. 이를 통해 최신 코드를 가져와 conflict을 피할 수 있습니다.

먼저 remote 저장소를 확인합니다.

```
$ git remote -v
origin https://github.com/myusername/BUFS-Direct.git (fetch)
origin https://github.com/myusername/BUFS-Direct.git (push)
upstream # 이 라인은 나타나지 않을 수도 있음
```

만약 upstream이 설정되지 않았다면 upstream을 설정해주세요.

```
$ git remote add upstream https://github.com/SAMEZ-0129/BUFS-Direct.git
```

그 후, upstream 소스를 rebase 해주세요.

```
$ git fetch upstream
$ git rebase upstream/master
```

#### Step 5: whale에서-테스트하기

수정한 부분이 잘 동작하는지 테스트하는 방법은 다음과 같습니다.

- 웨일 브라우저 확장앱 관리자 사이트로 이동
    ```
    whale://extensions/
    ```

브라우저에서 다음 주소로 이동한 후, `압축해제 된 확장앱 설치` 버튼을 클릭해서 현재 개발중인 폴더를 올려서 테스트해보세요.

#### Step 6: Pull-Request-보내기

변경 내용을 clone한 레포지토리에 push합니다.

```
$ git push origin new_button
```

이제 Pull Request를 보낼 준비가 완료되었습니다. Fork된 레포지토리로 이동하여 Pull Request를 보내주세요.
