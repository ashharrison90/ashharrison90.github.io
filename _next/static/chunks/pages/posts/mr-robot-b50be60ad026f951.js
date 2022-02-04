(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{7106:function(e,n,t){"use strict";t.r(n),t.d(n,{metadata:function(){return s}});var a=t(5893),r=t(2939),s={title:"Mr Robot v3.0",excerpt:"Using neural networks to pick my fantasy football team.",coverImage:"/assets/blog/mr-robot/elliot.webp",date:"2021-08-24T17:40:07.322Z",tags:["python","machinelearning"]},i=function(e){var n=e.children;return(0,a.jsx)(r.Z,{metadata:s,children:n})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i?(0,a.jsx)(i,Object.assign({},e,{children:(0,a.jsx)(n,{})})):n();function n(){var n=Object.assign({h2:"h2",p:"p",a:"a",ol:"ol",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code",em:"em",ul:"ul"},e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Fantasy football overview"}),"\n",(0,a.jsx)(n.p,{children:"Now that the 2021/2022 Premier League season has officially started, it seems appropriate to talk about this side project in a little more detail."}),"\n",(0,a.jsx)(n.p,{children:"For anyone unfamiliar with fantasy football, it's a game where you pick a hypothetical team of 15 players with the aim of maximising the number of points scored over the course of the season. Each player in your team gains points based on the actions described in the table below."}),"\n",(0,a.jsx)(n.p,{children:"| Action                                               | Points |\n| ---------------------------------------------------- | ------ |\n| Playing up to 60 minutes                             | 1      |\n| Playing 60 minutes or more (excluding stoppage time) | 2      |\n| Goal scored by a goalkeeper or defender              | 6      |\n| Goal scored by a midfielder                          | 5      |\n| Goal scored by a forward                             | 4      |\n| Goal assist                                          | 3      |\n| Clean sheet by a goalkeeper or defender              | 4      |\n| Clean sheet by a midfielder                          | 1      |\n| 3 shot saves by a goalkeeper                         | 1      |\n| Penalty save                                         | 5      |\n| Penalty miss                                         | -2     |\n| Bonus points for the best players in a match         | 1-3    |\n| 2 goals conceded by a goalkeeper or defender         | -1     |\n| Yellow card                                          | -1     |\n| Red card                                             | -3     |\n| Own goal                                             | -2     |"}),"\n",(0,a.jsxs)(n.p,{children:["Of course, there are certain constraints to make the game challenging. Everyone starts the season with the same initial budget. You must have the correct number of players in each position and can't have more than 3 players from the same team. You can find the full list of rules ",(0,a.jsx)(n.a,{href:"https://fantasy.premierleague.com/help/rules",children:"over on the website"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"So what does this have to do with Mr Robot? Nothing. It's just the name of my team."}),"\n",(0,a.jsx)(n.h2,{children:"Mr Robot v1.0"}),"\n",(0,a.jsx)(n.p,{children:"We'll start with what exists already. Back at the start of the 2016/2017 season, I wanted to write something in Python. I set myself the challenge of writing a fantasy football bot in a week. It would decide the team and interact with the fantasy premier league API to make the necessary transfers throughout the season with zero manual intervention."}),"\n",(0,a.jsx)(n.p,{children:"The code is broadly split into 3 parts:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Web service module"}),". This is responsible for interacting with the various endpoints the fantasy premier league API provides. It logs in, scrapes player data, fixture data, the current team, makes any transfers and sets the new team and starting lineup."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Points prediction module"}),". Given a specific player and fixture data, predict how many points that player will score."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Linear solver module"}),". Once we have a list of players and points, construct the best possible team given the various constraints."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the last two in a bit more detail."}),"\n",(0,a.jsx)(n.h3,{children:"Points prediction"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def predict_points(player, fixture_data, gameweek=0):\n    form = float(player['form'])\n    ppg = float(player['points_per_game'])\n    expected_points = max(form, ppg)\n\n    injury_ratio = calculate_injury_multiplier(player)\n    fixture_ratio = calculate_fixture_multiplier(player, fixture_data, gameweek)\n    past_fixture_ratio = calculate_past_fixture_multiplier(player, fixture_data)\n\n    result = expected_points * injury_ratio * fixture_ratio * past_fixture_ratio\n    return result\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Given a player, we take the max of their ",(0,a.jsx)(n.code,{children:"form"})," (effectively a running average over the last 3 games) and their ",(0,a.jsx)(n.code,{children:"points_per_game"})," (their mean point score over the season so far). The idea being this would allow in-form players to be substituted in over players with a higher ",(0,a.jsx)(n.code,{children:"points_per_game"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["There are also some ratios that normalise the score a bit. ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"injury_ratio"})})," is a value between 0 and 1 describing how likely a player is to play given any injury information. ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"fixture_ratio"})})," is a ratio calculated from the two teams Elo ratings. Players on higher rated teams ",(0,a.jsx)(n.em,{children:"should"})," score more points when playing against lower rated teams and vice-versa. Finally, ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"past_fixture_ratio"})})," is a ratio of minutes played against total minutes. This is to prevent adding players who may have only played one game but scored highly."]}),"\n",(0,a.jsx)(n.p,{children:"I know, I know. It's a pretty shit implementation. But I only had a week. Give me a break."}),"\n",(0,a.jsx)(n.h3,{children:"Linear solver"}),"\n",(0,a.jsxs)(n.p,{children:["Fortunately, the linear solver is actually pretty non-shit. It uses a Python module called ",(0,a.jsx)(n.a,{href:"https://coin-or.github.io/pulp/",children:"PuLP"})," to define and solve a ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Linear_programming",children:"linear optimisation problem"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Let's start by defining the optimisation problem. We want to maximise the total points scored:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Define the squad linear optimisation problem\nsquad_prob = pulp.LpProblem('squad', pulp.LpMaximize)\n"})}),"\n",(0,a.jsx)(n.p,{children:"We then loop through each player and add their data to a set of linear equations:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Loop through every player and add them to the constraints\nall_players = web_service.get_all_player_data()['elements']\nfor player in all_players:\n    fixture_data = web_service.get_player_fixtures(player['id'])\n    player['expected_points_this_gameweek'] = points.predict_points(player, fixture_data)\n    player['selected'] = pulp.LpVariable('player_' + str(player['id']), cat='Binary')\n    teams_represented[player['team'] - 1] += player['selected']\n    player_type = player['element_type']\n    new_squad_points += player['selected'] * player['expected_points_this_gameweek']\n\n    if player_type == 1:\n        num_goal += player['selected']\n    elif player_type == 2:\n        num_def += player['selected']\n    elif player_type == 3:\n        num_mid += player['selected']\n    elif player_type == 4:\n        num_att += player['selected']\n\n    if player['id'] in current_squad_ids:\n        index = current_squad_ids.index(player['id'])\n        selling_price = current_squad['picks'][index]['selling_price']\n        bank += (1 - player['selected']) * selling_price\n        squad_value -= (1 - player['selected']) * player['now_cost']\n    else:\n        num_changes += player['selected']\n        bank -= player['selected'] * player['now_cost']\n        squad_value += player['selected'] * player['now_cost']\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The key part here is the creation of the binary variable ",(0,a.jsx)(n.code,{children:"player['selected']"})," determining whether to select the player or not. This variable either takes the value of 0 or 1. So when evaluating the overall squad points we have an equation of the form:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"new_squad_points =\n  player_1['selected'] * player_1['expected_points'] +\n  player_2['selected'] * player_2['expected_points'] +\n  player_3['selected'] * player_3['expected_points'] +\n  ...\n  player_n['selected'] * player_n['expected_points']\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By setting different values of ",(0,a.jsx)(n.code,{children:"selected"})," for each player, we get different squad points. But what's preventing the solver from selecting every player to give the maximum amount of points? The constraints. These are:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Must not have more than 3 players from the same team"}),"\n",(0,a.jsx)(n.li,{children:"Must have enough bank for the team"}),"\n",(0,a.jsx)(n.li,{children:"Must not have a negative bank"}),"\n",(0,a.jsx)(n.li,{children:"Must have 2 goalkeepers"}),"\n",(0,a.jsx)(n.li,{children:"Must have 5 defenders"}),"\n",(0,a.jsx)(n.li,{children:"Must have 5 midfielders"}),"\n",(0,a.jsx)(n.li,{children:"Must have 3 forwards"}),"\n",(0,a.jsx)(n.li,{children:"Must only use the free transfers when making changes"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Account for free transfers and cost transfers\nfree_transfers_used = pulp.LpVariable(\n    'free_transfers_used',\n    cat='Integer',\n    lowBound=0,\n    upBound=free_transfers\n)\ntransfer_cost = ((num_changes - free_transfers_used)\n                  * constants.TRANSFER_POINT_DEDUCTION)\n\n# Add problem and constraints\nsquad_prob += new_squad_points - transfer_cost\nfor team_count in teams_represented:\n    squad_prob += (team_count <= constants.SQUAD_MAX_PLAYERS_SAME_TEAM)\nsquad_prob += (squad_value + bank <= total_bank)\nsquad_prob += (bank >= 0)\nsquad_prob += (num_goal == constants.SQUAD_NUM_GOALKEEPERS)\nsquad_prob += (num_def == constants.SQUAD_NUM_DEFENDERS)\nsquad_prob += (num_mid == constants.SQUAD_NUM_MIDFIELDERS)\nsquad_prob += (num_att == constants.SQUAD_NUM_ATTACKERS)\nsquad_prob += (num_changes - free_transfers_used >= 0)\n\n# Solve\nsquad_prob.solve()\n"})}),"\n",(0,a.jsx)(n.h3,{children:"Performance"}),"\n",(0,a.jsx)(n.p,{children:"This would then run nightly as a cron job on a Raspberry Pi. It compares the current date to the next transfer deadline date scraped by the web service. If the days match (i.e. we're on the day of the transfer deadline) it updates the squad."}),"\n",(0,a.jsx)(n.p,{children:"So how has it been doing?"}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/assets/blog/mr-robot/past-performance.webp",alt:"Past performance has been mixed..."}),(0,a.jsx)("figcaption",{children:"Past performance has been mixed..."})]}),"\n",(0,a.jsxs)(n.p,{children:["I mean... not ",(0,a.jsx)(n.em,{children:"great"}),". To put those numbers into context, there are usually around 6-7 million total players. So top ~40% in its first season then top ~25% for 2 seasons. The final dip is a purely human error: during the season I moved and forgot to plug the Raspberry Pi back in."]}),"\n",(0,a.jsx)(n.p,{children:"Either way, I think we can do better."}),"\n",(0,a.jsx)(n.h2,{children:"Improvements"}),"\n",(0,a.jsx)(n.p,{children:"Even though I think the linear solver is pretty solid at this point, there is still a small improvement we can make. Whilst we maximise the points for the entire squad, on any given gameweek only the starting 11 players points will contribute to the overall score. Most of the best fantasy football players will therefore try to optimise the score of their starting 11."}),"\n",(0,a.jsx)(n.p,{children:'This was particularly difficult to formulate as a constraint. Instead I ended up requiring that there were at least 4 "cheap" players in the squad at any time:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"num_cheap = 0\n\nfor player in all_players:\n\n  ...\n\n  if player['now_cost'] <= 51.00:\n    num_cheap += player['selected']\n\n  ...\n\n  squad_prob += (num_cheap >= 4)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["These will ",(0,a.jsx)(n.em,{children:"probably"}),", although not ",(0,a.jsx)(n.em,{children:"necessarily"}),", be the players on the bench. That leaves us with at least 79.6/11 = 7.24 million per player for the starting 11, as opposed to 100/15 = 6.67 million per player when the budget is shared equally between the whole squad."]}),"\n",(0,a.jsx)(n.p,{children:"But now that we know a bit more about the code, I think it's pretty obvious that the majority of the improvements will need to be made in the points prediction module. So how can we more accurately predict the points each player will score each week? By outsourcing the work to a neural network!"}),"\n",(0,a.jsx)(n.h2,{children:"PyTorch"}),"\n",(0,a.jsxs)(n.p,{children:["Enter PyTorch. ",(0,a.jsx)(n.a,{href:"https://pytorch.org/",children:"PyTorch"})," is an open source machine learning framework developed by Facebook. Machine learning works by analysing a set of training data to build a model of the data that can then be used to make future predictions. This sort of problem is particularly suited to machine learning as it can recognise patterns humans might miss."]}),"\n",(0,a.jsx)(n.p,{children:"First, we define the model class."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from torch.nn import BatchNorm1d, Dropout, Embedding, Linear, Module, ModuleList, ReLU, Sequential\nimport torch\n\nclass Model(Module):\n    def __init__(self, embedding_size, num_numerical_cols):\n        super().__init__()\n        self.all_embeddings = ModuleList([Embedding(ni, nf) for ni, nf in embedding_size])\n        self.embedding_dropout = Dropout(0.1)\n        self.batch_norm_num = BatchNorm1d(num_numerical_cols)\n\n        all_layers = []\n        num_categorical_cols = sum((nf for ni, nf in embedding_size))\n        layer_size = num_categorical_cols + num_numerical_cols\n\n        layer_sizes = [100, 50, 25]\n        for i, new_layer_size in enumerate(layer_sizes):\n            all_layers.append(Linear(layer_size, new_layer_size))\n            all_layers.append(ReLU(inplace=True))\n            all_layers.append(BatchNorm1d(new_layer_size))\n            all_layers.append(Dropout(0.2))\n            layer_size = new_layer_size\n\n        all_layers.append(Linear(layer_sizes[-1], 1))\n        self.layers = Sequential(*all_layers)\n\n    def forward(self, x_categorical, x_numerical):\n        embeddings = []\n        for i, e in enumerate(self.all_embeddings):\n            embeddings.append(e(x_categorical[:,i]))\n        x = torch.cat(embeddings, 1)\n        x = self.embedding_dropout(x)\n        x_numerical = self.batch_norm_num(x_numerical)\n        x = torch.cat([x, x_numerical], 1)\n        x = self.layers(x)\n        return x\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In basic terms, we're taking the input data and applying a set of transformations. These are known as layers. The constructor sets up the layers which can then be used by the ",(0,a.jsx)(n.code,{children:"forward"})," function. This ",(0,a.jsx)(n.code,{children:"forward"})," function is effectively what is invoked when training the model. You can find lots of information on the different layer types ",(0,a.jsx)(n.a,{href:"https://pytorch.org/docs/stable/nn.html",children:"in the docs"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["One layer that's pretty interesting (and actually understandable) is the Dropout layer. ",(0,a.jsx)(n.a,{href:"https://jmlr.org/papers/v15/srivastava14a.html",children:"Neural networks are generally prone to overfitting the training data"}),". The idea of a dropout layer is to randomly remove some neurons in the network during training to prevent these neurons from coadaptation. ",(0,a.jsx)(n.a,{href:"https://medium.com/@lipeng2/dropout-is-so-important-e517bbe3ffcc",children:"Here's an excellent article about this by Michael Peng over on medium"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Anyway, back to the transformation layers. At the start we don't know exactly what values these transformations should have. We define a ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Loss_function",children:"loss function"})," that tells us how far away our predicted value is from the real thing, and each time the model runs against the training data it attempts to minimise the loss function. This is known as a ",(0,a.jsx)(n.strong,{children:"training loop"})," or ",(0,a.jsx)(n.strong,{children:"epoch"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# train the model\ndef train_model():\n    logger.info('Training the model. This could take a long time...')\n    model.train()\n    # define the optimization\n    loss_function = MSELoss()\n    optimizer = SGD(model.parameters(), lr=0.001, momentum=0.9)\n    epochs = 500\n    # enumerate epochs\n    for epoch in range(epochs):\n        # compute the model output\n        predictions = model(categorical_training_data, numerical_training_data).squeeze()\n        # calculate loss compared to actual outputs\n        loss = loss_function(predictions, training_outputs)\n        logger.info('Epoch: {}/{}. Loss: {:.2f}'.format(epoch+1, epochs, loss))\n        # clear the gradients\n        optimizer.zero_grad()\n        # credit assignment\n        loss.backward()\n        # update model weights\n        optimizer.step()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally we need data in order to train the model. Huge thanks to ",(0,a.jsx)(n.a,{href:"https://github.com/vaastav",children:"vaastav"})," who has been scraping data since the 2016/2017 season over on the ",(0,a.jsx)(n.a,{href:"https://github.com/vaastav/Fantasy-Premier-League",children:"Fantasy-Premier-League"})," project."]}),"\n",(0,a.jsxs)(n.p,{children:["Maybe you've noticed I've skipped over ",(0,a.jsx)(n.strong,{children:"a lot"})," of details. I'm not a data scientist. I can't tell you what layers to use, how to pick the number of neurons in each layer, why to pick a certain learning rate or how many epochs are required because I honestly don't know. The numbers above are purely the result of trial and error."]}),"\n",(0,a.jsx)(n.h2,{children:"Results"}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:"/assets/blog/mr-robot/team-final.webp",alt:"Final team selection"}),(0,a.jsx)("figcaption",{children:(0,a.jsx)(n.p,{children:"The final team selection and their point totals after the first gameweek."})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here's the team and their point totals for week 1. This gave an overall gameweek score of 82, which puts the team at rank 2,004,686 out of ~7 million active players. Definitely not mindblowing, but a promising start nonetheless. Fantasy football is all about consistency. If the team consistently scores 82 that would be well over 3000 points by the end of the season. ",(0,a.jsx)(n.a,{href:"https://www.reddit.com/r/FantasyPL/comments/bowc35/points_needed_to_win_fpl/",children:"Easily enough to win the entire competition"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Earlier we talked about patterns and how machine learning can recognise things we might miss. One thing I definitely missed was that ",(0,a.jsx)(n.a,{href:"https://www.liverpoolfc.com/news/first-team/440750-mohamed-salah-could-set-premier-league-opening-day-record",children:"Mo Salah has scored in the opening game of the previous 4 seasons"}),". This season, Salah ended up being the second highest points scorer in the opening gameweek."]}),"\n",(0,a.jsxs)(n.p,{children:["I'll try to remember to write an update post at the end of the season. In the mean time, you can ",(0,a.jsx)(n.a,{href:"https://github.com/ashharrison90/fantasy_pl",children:"check out all the code here."})]})]})}}},8191:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/mr-robot",function(){return t(7106)}])}},function(e){e.O(0,[774,29,514,237,939,888,179],(function(){return n=8191,e(e.s=n);var n}));var n=e.O();_N_E=n}]);