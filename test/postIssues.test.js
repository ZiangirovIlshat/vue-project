import { shallowMount } from "@vue/test-utils";
import post from "../src/components/post.vue";

describe("Post component", ()=> {
  it("changes the label Show/Hide issues on toggle", async () => {
    const wrapper = shallowMount(post, {
      props: {
        postData: {
          ownerLogin: "Иванов Иван",
          ownerAvatar: "https://jjji.ru/400x150",
          issuesIsTrue: true,
          issuesContent: [{ id: 1, user: { login: "Иванов Иван" }, title: "Test issue" }],
          createdAt: "2022-01-01",
        },
      },
    });

    const toggler = wrapper.findComponent({ ref: "toggler" });
    await toggler.trigger("click");

    expect(toggler.text()).toBe("Hide issues");

    await toggler.trigger("click");

    expect(toggler.text()).toBe("Show issues");
  });

  it("fetches issues on toggle", async () => {
    const fetchIssuesMock = jest.fn();
    const wrapper = mount(post, {
      props: {
        postData: {
          ownerLogin: "Иванов Иван",
          ownerAvatar: "https://jjji.ru/400x150",
          issuesIsTrue: true,
          issuesContent: [{ id: 1, user: { login: "Иванов Иван" }, title: "Test issue" }],
          createdAt: "2022-01-01",
        },
      },
      global: {
        mocks: {
          $store: {
            dispatch: fetchIssuesMock,
          },
        },
      },
    });

    const toggler = wrapper.findComponent({ ref: "toggler" });
    await toggler.trigger("click");

    expect(fetchIssuesMock).toHaveBeenCalled();
  });

  it("displays correct number of issues", async () => {
    const wrapper = mount(post, {
      props: {
        postData: {
          ownerLogin: "Иванов Иван",
          ownerAvatar: "https://jjji.ru/400x150",
          issuesIsTrue: true,
          issuesContent: [
            { id: 1, user: { login: "Иванов Иван" }, title: "Test issue 1" },
            { id: 2, user: { login: "Иванов Иван" }, title: "Test issue 2" },
          ],
          createdAt: "2022-01-01",
        },
      },
    });

    const issuesList = wrapper.findAll(".post__issues li");
    expect(issuesList.length).toBe(2);
  });

  it("does not perform duplicate requests on multiple toggles", async () => {
    const fetchIssuesMock = jest.fn();
    const wrapper = mount(post, {
      props: {
        postData: {
          ownerLogin: "Иванов Иван",
          ownerAvatar: "https://jjji.ru/400x150",
          issuesIsTrue: true,
          issuesContent: [{ id: 1, user: { login: "Иванов Иван" }, title: "Test issue" }],
          createdAt: "2022-01-01",
        },
      },
      global: {
        mocks: {
          $store: {
            dispatch: fetchIssuesMock,
          },
        },
      },
    });

    const toggler = wrapper.findComponent({ ref: "toggler" });
    await toggler.trigger("click");
    await toggler.trigger("click");

    expect(fetchIssuesMock).toHaveBeenCalledTimes(1);
  });
});