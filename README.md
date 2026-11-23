# Institute for Probabilistic Intelligence (PUAI)

GitHub Pages용 정적 홈페이지입니다. 빌드나 패키지 설치 없이 사용할 수 있습니다. 한 페이지에서 한국어와 영어를 함께 표시하며, 사이트 이름은 가칭입니다.

## 배포 전 수정

- `index.html`에서 기관 소개, 연구자 소개, 프로젝트, 논문 및 블로그 본문을 편집할 수 있습니다. 한국어 본문과 `lang="en"`으로 표시한 영어 본문을 함께 수정하세요.
- 연락처의 `data-email=""`에 공개할 이메일 주소를 넣으세요. 비워 두고 `github.io`에서 배포하면 해당 GitHub 계정으로 연결합니다. 로컬에서는 주소 안내 문구가 표시됩니다.
- 블로그에 글을 추가하려면 `#notes`의 기존 `<details>` 블록을 복제하고 고유한 `id` 및 제목을 지정하세요.
- 첫 화면의 비교 그림은 결정론적 예측의 단일값과 확률적 예측의 확률분포를 나란히 보여줍니다.

## 로컬 확인

압축을 푼 뒤 `index.html`을 브라우저에서 열면 됩니다.

## GitHub Pages 배포

1. GitHub에 공개 저장소를 만듭니다. 계정의 기본 주소를 쓰려면 이름을 `USERNAME.github.io`로 지정합니다. 이미 기본 홈페이지가 있거나 별도 주소를 원하면 `ipi` 등 프로젝트 저장소 이름을 사용합니다.
2. `index.html`, `style.css`, `site.js`, `normal-distribution-logo.png`, `.nojekyll`, `README.md`를 저장소 최상위에 커밋합니다. 웹 업로드를 사용할 때도 `.nojekyll`이 저장소에 표시되는지 확인하세요.
3. **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택합니다. 브랜치는 `main`, 폴더는 `/(root)`로 지정하고 **Save**를 누릅니다.
4. **Actions**에서 배포 결과를 확인한 뒤 **Settings → Pages → Visit site**로 접속합니다. 기본 저장소는 `https://USERNAME.github.io/`, 프로젝트 저장소는 `https://USERNAME.github.io/ipi/`에서 열립니다.

[GitHub Pages 공식 배포 가이드](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
