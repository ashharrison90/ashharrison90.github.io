(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{9950:function(e,t,a){"use strict";a.r(t),a.d(t,{metadata:function(){return s},default:function(){return d}});var n=a(7462),r=a(4925),l=(a(7294),a(3905)),o=a(1843),i=["components"],s={title:"Mr Robot v3.0",excerpt:"Using neural networks to pick my fantasy football team.",coverImage:"/assets/blog/mr-robot/elliot.webp",date:"2021-08-24T17:40:07.322Z",tags:["python","machinelearning"]},p={metadata:s},u=function(e){var t=e.children;return(0,l.kt)(o.Z,{metadata:s},t)};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Fantasy football overview"),(0,l.kt)("p",null,"Now that the 2021/2022 Premier League season has officially started, it seems appropriate to talk about this side project in a little more detail."),(0,l.kt)("p",null,"For anyone unfamiliar with fantasy football, it's a game where you pick a hypothetical team of 15 players with the aim of maximising the number of points scored over the course of the season. Each player in your team gains points based on the actions described in the table below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Points"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Playing up to 60 minutes"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Playing 60 minutes or more (excluding stoppage time)"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal scored by a goalkeeper or defender"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal scored by a midfielder"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal scored by a forward"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Goal assist"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clean sheet by a goalkeeper or defender"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clean sheet by a midfielder"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3 shot saves by a goalkeeper"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Penalty save"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Penalty miss"),(0,l.kt)("td",{parentName:"tr",align:null},"-2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonus points for the best players in a match"),(0,l.kt)("td",{parentName:"tr",align:null},"1-3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2 goals conceded by a goalkeeper or defender"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Yellow card"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Red card"),(0,l.kt)("td",{parentName:"tr",align:null},"-3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Own goal"),(0,l.kt)("td",{parentName:"tr",align:null},"-2")))),(0,l.kt)("p",null,"Of course, there are certain constraints to make the game challenging. Everyone starts the season with the same initial budget. You must have the correct number of players in each position and can't have more than 3 players from the same team. You can find the full list of rules ",(0,l.kt)("a",{parentName:"p",href:"https://fantasy.premierleague.com/help/rules"},"over on the website"),"."),(0,l.kt)("p",null,"So what does this have to do with Mr Robot? Nothing. It's just the name of my team."),(0,l.kt)("h2",null,"Mr Robot v1.0"),(0,l.kt)("p",null,"We'll start with what exists already. Back at the start of the 2016/2017 season, I wanted to write something in Python. I set myself the challenge of writing a fantasy football bot in a week. It would decide the team and interact with the fantasy premier league API to make the necessary transfers throughout the season with zero manual intervention."),(0,l.kt)("p",null,"The code is broadly split into 3 parts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Web service module"),". This is responsible for interacting with the various endpoints the fantasy premier league API provides. It logs in, scrapes player data, fixture data, the current team, makes any transfers and sets the new team and starting lineup."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Points prediction module"),". Given a specific player and fixture data, predict how many points that player will score."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Linear solver module"),". Once we have a list of players and points, construct the best possible team given the various constraints.")),(0,l.kt)("p",null,"Let's look at the last two in a bit more detail."),(0,l.kt)("h3",null,"Points prediction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def predict_points(player, fixture_data, gameweek=0):\n    form = float(player['form'])\n    ppg = float(player['points_per_game'])\n    expected_points = max(form, ppg)\n\n    injury_ratio = calculate_injury_multiplier(player)\n    fixture_ratio = calculate_fixture_multiplier(player, fixture_data, gameweek)\n    past_fixture_ratio = calculate_past_fixture_multiplier(player, fixture_data)\n\n    result = expected_points * injury_ratio * fixture_ratio * past_fixture_ratio\n    return result\n")),(0,l.kt)("p",null,"Given a player, we take the max of their ",(0,l.kt)("inlineCode",{parentName:"p"},"form")," (effectively a running average over the last 3 games) and their ",(0,l.kt)("inlineCode",{parentName:"p"},"points_per_game")," (their mean point score over the season so far). The idea being this would allow in-form players to be substituted in over players with a higher ",(0,l.kt)("inlineCode",{parentName:"p"},"points_per_game"),"."),(0,l.kt)("p",null,"There are also some ratios that normalise the score a bit. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"injury_ratio"))," is a value between 0 and 1 describing how likely a player is to play given any injury information. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"fixture_ratio"))," is a ratio calculated from the two teams Elo ratings. Players on higher rated teams ",(0,l.kt)("em",{parentName:"p"},"should")," score more points when playing against lower rated teams and vice-versa. Finally, ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"past_fixture_ratio"))," is a ratio of minutes played against total minutes. This is to prevent adding players who may have only played one game but scored highly."),(0,l.kt)("p",null,"I know, I know. It's a pretty shit implementation. But I only had a week. Give me a break."),(0,l.kt)("h3",null,"Linear solver"),(0,l.kt)("p",null,"Fortunately, the linear solver is actually pretty non-shit. It uses a Python module called ",(0,l.kt)("a",{parentName:"p",href:"https://coin-or.github.io/pulp/"},"PuLP")," to define and solve a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linear_programming"},"linear optimisation problem"),"."),(0,l.kt)("p",null,"Let's start by defining the optimisation problem. We want to maximise the total points scored:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Define the squad linear optimisation problem\nsquad_prob = pulp.LpProblem('squad', pulp.LpMaximize)\n")),(0,l.kt)("p",null,"We then loop through each player and add their data to a set of linear equations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Loop through every player and add them to the constraints\nall_players = web_service.get_all_player_data()['elements']\nfor player in all_players:\n    fixture_data = web_service.get_player_fixtures(player['id'])\n    player['expected_points_this_gameweek'] = points.predict_points(player, fixture_data)\n    player['selected'] = pulp.LpVariable('player_' + str(player['id']), cat='Binary')\n    teams_represented[player['team'] - 1] += player['selected']\n    player_type = player['element_type']\n    new_squad_points += player['selected'] * player['expected_points_this_gameweek']\n\n    if player_type == 1:\n        num_goal += player['selected']\n    elif player_type == 2:\n        num_def += player['selected']\n    elif player_type == 3:\n        num_mid += player['selected']\n    elif player_type == 4:\n        num_att += player['selected']\n\n    if player['id'] in current_squad_ids:\n        index = current_squad_ids.index(player['id'])\n        selling_price = current_squad['picks'][index]['selling_price']\n        bank += (1 - player['selected']) * selling_price\n        squad_value -= (1 - player['selected']) * player['now_cost']\n    else:\n        num_changes += player['selected']\n        bank -= player['selected'] * player['now_cost']\n        squad_value += player['selected'] * player['now_cost']\n")),(0,l.kt)("p",null,"The key part here is the creation of the binary variable ",(0,l.kt)("inlineCode",{parentName:"p"},"player['selected']")," determining whether to select the player or not. This variable either takes the value of 0 or 1. So when evaluating the overall squad points we have an equation of the form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"new_squad_points =\n  player_1['selected'] * player_1['expected_points'] +\n  player_2['selected'] * player_2['expected_points'] +\n  player_3['selected'] * player_3['expected_points'] +\n  ...\n  player_n['selected'] * player_n['expected_points']\n")),(0,l.kt)("p",null,"By setting different values of ",(0,l.kt)("inlineCode",{parentName:"p"},"selected")," for each player, we get different squad points. But what's preventing the solver from selecting every player to give the maximum amount of points? The constraints. These are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Must not have more than 3 players from the same team"),(0,l.kt)("li",{parentName:"ul"},"Must have enough bank for the team"),(0,l.kt)("li",{parentName:"ul"},"Must not have a negative bank"),(0,l.kt)("li",{parentName:"ul"},"Must have 2 goalkeepers"),(0,l.kt)("li",{parentName:"ul"},"Must have 5 defenders"),(0,l.kt)("li",{parentName:"ul"},"Must have 5 midfielders"),(0,l.kt)("li",{parentName:"ul"},"Must have 3 forwards"),(0,l.kt)("li",{parentName:"ul"},"Must only use the free transfers when making changes")),(0,l.kt)("p",null,"In code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Account for free transfers and cost transfers\nfree_transfers_used = pulp.LpVariable(\n    'free_transfers_used',\n    cat='Integer',\n    lowBound=0,\n    upBound=free_transfers\n)\ntransfer_cost = ((num_changes - free_transfers_used)\n                  * constants.TRANSFER_POINT_DEDUCTION)\n\n# Add problem and constraints\nsquad_prob += new_squad_points - transfer_cost\nfor team_count in teams_represented:\n    squad_prob += (team_count <= constants.SQUAD_MAX_PLAYERS_SAME_TEAM)\nsquad_prob += (squad_value + bank <= total_bank)\nsquad_prob += (bank >= 0)\nsquad_prob += (num_goal == constants.SQUAD_NUM_GOALKEEPERS)\nsquad_prob += (num_def == constants.SQUAD_NUM_DEFENDERS)\nsquad_prob += (num_mid == constants.SQUAD_NUM_MIDFIELDERS)\nsquad_prob += (num_att == constants.SQUAD_NUM_ATTACKERS)\nsquad_prob += (num_changes - free_transfers_used >= 0)\n\n# Solve\nsquad_prob.solve()\n")),(0,l.kt)("h3",null,"Performance"),(0,l.kt)("p",null,"This would then run nightly as a cron job on a Raspberry Pi. It compares the current date to the next transfer deadline date scraped by the web service. If the days match (i.e. we're on the day of the transfer deadline) it updates the squad."),(0,l.kt)("p",null,"So how has it been doing?"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/assets/blog/mr-robot/past-performance.webp",alt:"Past performance has been mixed..."}),(0,l.kt)("figcaption",null,"Past performance has been mixed...")),(0,l.kt)("p",null,"I mean... not ",(0,l.kt)("em",{parentName:"p"},"great"),". To put those numbers into context, there are usually around 6-7 million total players. So top ~40% in its first season then top ~25% for 2 seasons. The final dip is a purely human error: during the season I moved and forgot to plug the Raspberry Pi back in."),(0,l.kt)("p",null,"Either way, I think we can do better."),(0,l.kt)("h2",null,"Improvements"),(0,l.kt)("p",null,"Even though I think the linear solver is pretty solid at this point, there is still a small improvement we can make. Whilst we maximise the points for the entire squad, on any given gameweek only the starting 11 players points will contribute to the overall score. Most of the best fantasy football players will therefore try to optimise the score of their starting 11."),(0,l.kt)("p",null,'This was particularly difficult to formulate as a constraint. Instead I ended up requiring that there were at least 4 "cheap" players in the squad at any time:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"num_cheap = 0\n\nfor player in all_players:\n\n  ...\n\n  if player['now_cost'] <= 51.00:\n    num_cheap += player['selected']\n\n  ...\n\n  squad_prob += (num_cheap >= 4)\n")),(0,l.kt)("p",null,"These will ",(0,l.kt)("em",{parentName:"p"},"probably"),", although not ",(0,l.kt)("em",{parentName:"p"},"necessarily"),", be the players on the bench. That leaves us with at least 79.6/11 = 7.24 million per player for the starting 11, as opposed to 100/15 = 6.67 million per player when the budget is shared equally between the whole squad."),(0,l.kt)("p",null,"But now that we know a bit more about the code, I think it's pretty obvious that the majority of the improvements will need to be made in the points prediction module. So how can we more accurately predict the points each player will score each week? By outsourcing the work to a neural network!"),(0,l.kt)("h2",null,"PyTorch"),(0,l.kt)("p",null,"Enter PyTorch. ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"PyTorch")," is an open source machine learning framework developed by Facebook. Machine learning works by analysing a set of training data to build a model of the data that can then be used to make future predictions. This sort of problem is particularly suited to machine learning as it can recognise patterns humans might miss."),(0,l.kt)("p",null,"First, we define the model class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from torch.nn import BatchNorm1d, Dropout, Embedding, Linear, Module, ModuleList, ReLU, Sequential\nimport torch\n\nclass Model(Module):\n    def __init__(self, embedding_size, num_numerical_cols):\n        super().__init__()\n        self.all_embeddings = ModuleList([Embedding(ni, nf) for ni, nf in embedding_size])\n        self.embedding_dropout = Dropout(0.1)\n        self.batch_norm_num = BatchNorm1d(num_numerical_cols)\n\n        all_layers = []\n        num_categorical_cols = sum((nf for ni, nf in embedding_size))\n        layer_size = num_categorical_cols + num_numerical_cols\n\n        layer_sizes = [100, 50, 25]\n        for i, new_layer_size in enumerate(layer_sizes):\n            all_layers.append(Linear(layer_size, new_layer_size))\n            all_layers.append(ReLU(inplace=True))\n            all_layers.append(BatchNorm1d(new_layer_size))\n            all_layers.append(Dropout(0.2))\n            layer_size = new_layer_size\n\n        all_layers.append(Linear(layer_sizes[-1], 1))\n        self.layers = Sequential(*all_layers)\n\n    def forward(self, x_categorical, x_numerical):\n        embeddings = []\n        for i, e in enumerate(self.all_embeddings):\n            embeddings.append(e(x_categorical[:,i]))\n        x = torch.cat(embeddings, 1)\n        x = self.embedding_dropout(x)\n        x_numerical = self.batch_norm_num(x_numerical)\n        x = torch.cat([x, x_numerical], 1)\n        x = self.layers(x)\n        return x\n")),(0,l.kt)("p",null,"In basic terms, we're taking the input data and applying a set of transformations. These are known as layers. The constructor sets up the layers which can then be used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"forward")," function. This ",(0,l.kt)("inlineCode",{parentName:"p"},"forward")," function is effectively what is invoked when training the model. You can find lots of information on the different layer types ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/nn.html"},"in the docs"),"."),(0,l.kt)("p",null,"One layer that's pretty interesting (and actually understandable) is the Dropout layer. ",(0,l.kt)("a",{parentName:"p",href:"https://jmlr.org/papers/v15/srivastava14a.html"},"Neural networks are generally prone to overfitting the training data"),". The idea of a dropout layer is to randomly remove some neurons in the network during training to prevent these neurons from coadaptation. ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@lipeng2/dropout-is-so-important-e517bbe3ffcc"},"Here's an excellent article about this by Michael Peng over on medium"),"."),(0,l.kt)("p",null,"Anyway, back to the transformation layers. At the start we don't know exactly what values these transformations should have. We define a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Loss_function"},"loss function")," that tells us how far away our predicted value is from the real thing, and each time the model runs against the training data it attempts to minimise the loss function. This is known as a ",(0,l.kt)("strong",{parentName:"p"},"training loop")," or ",(0,l.kt)("strong",{parentName:"p"},"epoch"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# train the model\ndef train_model():\n    logger.info('Training the model. This could take a long time...')\n    model.train()\n    # define the optimization\n    loss_function = MSELoss()\n    optimizer = SGD(model.parameters(), lr=0.001, momentum=0.9)\n    epochs = 500\n    # enumerate epochs\n    for epoch in range(epochs):\n        # compute the model output\n        predictions = model(categorical_training_data, numerical_training_data).squeeze()\n        # calculate loss compared to actual outputs\n        loss = loss_function(predictions, training_outputs)\n        logger.info('Epoch: {}/{}. Loss: {:.2f}'.format(epoch+1, epochs, loss))\n        # clear the gradients\n        optimizer.zero_grad()\n        # credit assignment\n        loss.backward()\n        # update model weights\n        optimizer.step()\n")),(0,l.kt)("p",null,"Finally we need data in order to train the model. Huge thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vaastav"},"vaastav")," who has been scraping data since the 2016/2017 season over on the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vaastav/Fantasy-Premier-League"},"Fantasy-Premier-League")," project."),(0,l.kt)("p",null,"Maybe you've noticed I've skipped over ",(0,l.kt)("strong",{parentName:"p"},"a lot")," of details. I'm not a data scientist. I can't tell you what layers to use, how to pick the number of neurons in each layer, why to pick a certain learning rate or how many epochs are required because I honestly don't know. The numbers above are purely the result of trial and error."),(0,l.kt)("h2",null,"Results"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/assets/blog/mr-robot/team-final.webp",alt:"Final team selection"}),(0,l.kt)("figcaption",null,"The final team selection and their point totals after the first gameweek.")),(0,l.kt)("p",null,"Here's the team and their point totals for week 1. This gave an overall gameweek score of 82, which puts the team at rank 2,004,686 out of ~7 million active players. Definitely not mindblowing, but a promising start nonetheless. Fantasy football is all about consistency. If the team consistently scores 82 that would be well over 3000 points by the end of the season. ",(0,l.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/FantasyPL/comments/bowc35/points_needed_to_win_fpl/"},"Easily enough to win the entire competition"),"."),(0,l.kt)("p",null,"Earlier we talked about patterns and how machine learning can recognise things we might miss. One thing I definitely missed was that ",(0,l.kt)("a",{parentName:"p",href:"https://www.liverpoolfc.com/news/first-team/440750-mohamed-salah-could-set-premier-league-opening-day-record"},"Mo Salah has scored in the opening game of the previous 4 seasons"),". This season, Salah ended up being the second highest points scorer in the opening gameweek."),(0,l.kt)("p",null,"I'll try to remember to write an update post at the end of the season. In the mean time, you can ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ashharrison90/fantasy_pl"},"check out all the code here.")))}d.isMDXComponent=!0},8191:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/mr-robot",function(){return a(9950)}])}},function(e){e.O(0,[774,29,236,843,888,179],(function(){return t=8191,e(e.s=t);var t}));var t=e.O();_N_E=t}]);