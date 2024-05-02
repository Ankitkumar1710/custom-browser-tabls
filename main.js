const tabsModel = {
    tabs: [],

    addTab(url = '') {
        this.tabs.push({ url });
    },

    removeTab(index) {
        this.tabs.splice(index, 1);
    }
};

const tabsView = {
    init() {
        this.tabsElement = $('.tabs');
        this.addTabBtn = $('#add-tab-btn');

        this.addTabBtn.on('click', () => controller.addTab());
        this.tabsElement.on('click', '.tab', function() {
            const index = $(this).index();
            controller.switchTab(index);
        });
        this.tabsElement.on('click', '.close-btn', function(event) {
            event.stopPropagation();
            const index = $(this).parent('.tab').index();
            controller.removeTab(index);
        });

        this.render();
    },

    renderTabs(tabs) {
        this.tabsElement.empty();

        tabs.forEach((tab, index) => {
            const tabElement = $(`
                <div class="tab">
                    ${tab.url ? `<span>${tab.url}</span>` : '<input type="text" class="url-input" placeholder="Enter URL">'}
                    <button class="close-btn">x</button>
                </div>
            `);
            if (index === controller.getActiveTabIndex()) {
                tabElement.addClass('active');
            }
            this.tabsElement.append(tabElement);
        });
    }
};

const controller = {
    init() {
        tabsView.init();
    },

    addTab(url = '') {
        tabsModel.addTab(url);
        tabsView.renderTabs(tabsModel.tabs);
    },

    removeTab(index) {
        tabsModel.removeTab(index);
        tabsView.renderTabs(tabsModel.tabs);
    },

    switchTab(index) {
        tabsView.renderTabs(tabsModel.tabs);
        const tab = tabsModel.tabs[index];
        $('#content-frame').attr('src', tab.url || 'about:blank');
    },

    getActiveTabIndex() {
        return this.activeTabIndex;
    }
};

$(document).ready(() => {
    controller.init();

    $(document).on('keypress', '.url-input', function(event) {
        if (event.which === 13) {
            const index = $(this).closest('.tab').index();
            const url = $(this).val();
            controller.switchTab(index);
            tabsModel.tabs[index].url = url;
            $('#content-frame').attr('src', url);
            event.preventDefault();
        }
    });
});
